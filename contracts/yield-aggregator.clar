;; title: yield-aggregator
;; version: 2.1.0
;; summary: Institutional sBTC Yield Aggregator - Clarity 4
;; description: Core yield optimization platform for institutional users

;; traits
(define-trait sip-010-trait
  (
    (transfer (uint principal principal (optional (buff 34))) (response bool uint))
    (get-name () (response (string-ascii 32) uint))
    (get-symbol () (response (string-ascii 32) uint))
    (get-decimals () (response uint uint))
    (get-balance (principal) (response uint uint))
    (get-total-supply () (response uint uint))
    (get-token-uri () (response (optional (string-utf8 256)) uint))
  )
)

;; constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_UNAUTHORIZED (err u100))
(define-constant ERR_ALREADY_INITIALIZED (err u101))
(define-constant ERR_NOT_INITIALIZED (err u102))
(define-constant ERR_INSUFFICIENT_BALANCE (err u103))
(define-constant ERR_INVALID_AMOUNT (err u104))
(define-constant ERR_DEPOSIT_FAILED (err u105))
(define-constant ERR_WITHDRAWAL_FAILED (err u106))
(define-constant ERR_YIELD_CALCULATION_FAILED (err u107))

;; data vars
(define-data-var contract-initialized bool false)
(define-data-var total-deposits uint u0)
(define-data-var total-yield-earned uint u0)
(define-data-var emergency-pause bool false)

;; data maps
(define-map user-deposits principal uint)
(define-map user-yield-earned principal uint)
(define-map deposit-history principal (list 100 {amount: uint, timestamp: uint, block-height: uint}))

;; Deposit tiers for yield bonus
(define-constant TIER_BRONZE u0)
(define-constant TIER_SILVER u1)
(define-constant TIER_GOLD u2)
(define-constant TIER_PLATINUM u3)

(define-constant TIER_SILVER_THRESHOLD u10000000) ;; 10M sats
(define-constant TIER_GOLD_THRESHOLD u50000000)   ;; 50M sats
(define-constant TIER_PLATINUM_THRESHOLD u100000000) ;; 100M sats

(define-map user-tier principal uint)

;; Per-user deposit cap
(define-data-var max-deposit-per-user uint u500000000) ;; 500M sats default cap
;; Global TVL cap
(define-data-var max-total-deposits uint u5000000000) ;; 5B sats

;; public functions

;; Initialize the yield aggregator (only contract owner)
(define-public (initialize)
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (not (var-get contract-initialized)) ERR_ALREADY_INITIALIZED)
    (var-set contract-initialized true)
    (print {event: "yield-aggregator-initialized", by: tx-sender})
    (ok true)
  )
)

;; Deposit sBTC tokens for yield optimization
(define-public (deposit-sbtc (amount uint) (token <sip-010-trait>))
  (let (
    (current-balance (unwrap-panic (contract-call? token get-balance tx-sender)))
    (current-user-deposit (default-to u0 (map-get? user-deposits tx-sender)))
  )
    (asserts! (var-get contract-initialized) ERR_NOT_INITIALIZED)
    (asserts! (not (var-get emergency-pause)) ERR_UNAUTHORIZED)
    (asserts! (> amount u0) ERR_INVALID_AMOUNT)
    (asserts! (>= current-balance amount) ERR_INSUFFICIENT_BALANCE)
    (asserts! (<= (+ current-user-deposit amount) (var-get max-deposit-per-user)) ERR_INVALID_AMOUNT)
    (asserts! (<= (+ (var-get total-deposits) amount) (var-get max-total-deposits)) ERR_INVALID_AMOUNT)

    ;; Transfer tokens from user to this contract (vault)
    (match (contract-call? token transfer amount tx-sender (as-contract tx-sender) none)
      success (begin
        (map-set user-deposits tx-sender (+ current-user-deposit amount))
        ;; Update user tier
        (map-set user-tier tx-sender (calculate-tier (+ current-user-deposit amount)))
        (var-set total-deposits (+ (var-get total-deposits) amount))
        (let ((current-history (default-to (list) (map-get? deposit-history tx-sender))))
          (map-set deposit-history tx-sender
            (unwrap-panic (as-max-len?
              (append current-history {amount: amount, timestamp: stacks-block-height, block-height: stacks-block-height})
              u100))))
        (print {event: "deposit", user: tx-sender, amount: amount, total-deposits: (var-get total-deposits)})
        (ok true)
      )
      error ERR_DEPOSIT_FAILED
    )
  )
)

;; Withdraw deposited sBTC tokens plus earned yield
(define-public (withdraw-sbtc (amount uint) (token <sip-010-trait>))
  (let (
    (caller tx-sender)
    (user-deposit (default-to u0 (map-get? user-deposits tx-sender)))
    (user-yield (default-to u0 (map-get? user-yield-earned tx-sender)))
    (total-available (+ user-deposit user-yield))
  )
    (asserts! (var-get contract-initialized) ERR_NOT_INITIALIZED)
    (asserts! (> amount u0) ERR_INVALID_AMOUNT)
    (asserts! (<= amount total-available) ERR_INSUFFICIENT_BALANCE)

    ;; Transfer tokens back from contract vault to user
    (match (as-contract (contract-call? token transfer amount tx-sender caller none))
      success (begin
        ;; Update user balances
        (if (<= amount user-deposit)
          (begin
            (map-set user-deposits caller (- user-deposit amount))
            (map-set user-yield-earned caller user-yield))
          (begin
            (map-set user-deposits caller u0)
            (map-set user-yield-earned caller (- user-yield (- amount user-deposit))))
        )
        ;; Update total deposits
        (var-set total-deposits (- (var-get total-deposits) (min amount user-deposit)))
        (print {event: "withdrawal", user: caller, amount: amount})
        (ok true)
      )
      error ERR_WITHDRAWAL_FAILED
    )
  )
)

;; Credit yield to a specific user proportionally (owner only)
(define-public (credit-user-yield (user principal) (total-yield uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (var-get contract-initialized) ERR_NOT_INITIALIZED)
    (asserts! (> total-yield u0) ERR_INVALID_AMOUNT)

    (let (
      (yield-share (calculate-user-yield user total-yield))
      (current-yield (default-to u0 (map-get? user-yield-earned user)))
    )
      (if (> yield-share u0)
        (begin
          (map-set user-yield-earned user (+ current-yield yield-share))
          (print {event: "yield-credited", user: user, amount: yield-share})
          (ok yield-share)
        )
        (ok u0)
      )
    )
  )
)

;; Calculate and distribute yield globally (only contract owner)
(define-public (distribute-yield (total-yield uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (var-get contract-initialized) ERR_NOT_INITIALIZED)
    (asserts! (> total-yield u0) ERR_INVALID_AMOUNT)

    ;; Update total yield earned
    (var-set total-yield-earned (+ (var-get total-yield-earned) total-yield))
    (print {event: "yield-distributed", amount: total-yield, total-yield: (var-get total-yield-earned)})
    (ok true)
  )
)

;; Emergency pause function (only contract owner)
(define-public (set-emergency-pause (pause bool))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (var-set emergency-pause pause)
    (print {event: "emergency-pause", status: pause, by: tx-sender})
    (ok true)
  )
)

;; Admin: set per-user deposit cap
(define-public (set-max-deposit-per-user (new-max uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (> new-max u0) ERR_INVALID_AMOUNT)
    (var-set max-deposit-per-user new-max)
    (ok true)))

;; Admin: set global TVL cap
(define-public (set-max-total-deposits (new-max uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (> new-max u0) ERR_INVALID_AMOUNT)
    (var-set max-total-deposits new-max)
    (ok true)))

;; read only functions

;; Get user deposit balance
(define-read-only (get-user-deposit (user principal))
  (ok (default-to u0 (map-get? user-deposits user)))
)

;; Get user earned yield
(define-read-only (get-user-yield (user principal))
  (ok (default-to u0 (map-get? user-yield-earned user)))
)

;; Get total deposits in the contract
(define-read-only (get-total-deposits)
  (ok (var-get total-deposits))
)

;; Get total yield earned
(define-read-only (get-total-yield-earned)
  (ok (var-get total-yield-earned))
)

;; Check if contract is initialized
(define-read-only (is-initialized)
  (ok (var-get contract-initialized))
)

;; Check if emergency pause is active
(define-read-only (is-emergency-paused)
  (ok (var-get emergency-pause))
)

;; Get user deposit tier
(define-read-only (get-user-tier (user principal))
  (ok (default-to TIER_BRONZE (map-get? user-tier user))))

;; Get per-user deposit cap
(define-read-only (get-max-deposit-per-user)
  (ok (var-get max-deposit-per-user)))

;; Get global TVL cap
(define-read-only (get-max-total-deposits)
  (ok (var-get max-total-deposits)))

;; Get user deposit history
(define-read-only (get-user-deposit-history (user principal))
  (ok (default-to (list) (map-get? deposit-history user)))
)

;; private functions

;; Determine user deposit tier based on total deposit amount
(define-private (calculate-tier (total-deposit uint))
  (if (>= total-deposit TIER_PLATINUM_THRESHOLD)
    TIER_PLATINUM
    (if (>= total-deposit TIER_GOLD_THRESHOLD)
      TIER_GOLD
      (if (>= total-deposit TIER_SILVER_THRESHOLD)
        TIER_SILVER
        TIER_BRONZE))))

;; Return the smaller of two uint values
(define-private (min (a uint) (b uint))
  (if (< a b) a b)
)

;; Calculate proportional yield for a user
(define-private (calculate-user-yield (user principal) (total-yield uint))
  (let (
    (user-deposit (default-to u0 (map-get? user-deposits user)))
    (contract-total-deposits (var-get total-deposits))
  )
    (if (> contract-total-deposits u0)
      (/ (* user-deposit total-yield) contract-total-deposits)
      u0
    )
  )
)

;; access-ctrl module
(define-map access-ctrl-registry uint {owner: principal, value: uint, active: bool, created: uint})
(define-data-var access-ctrl-counter uint u0)
(define-public (create-access-ctrl (val uint))
  (let ((id (+ (var-get access-ctrl-counter) u1)))
    (asserts! (> val u0) (err u600))
    (map-set access-ctrl-registry id {owner: tx-sender, value: val, active: true, created: stacks-block-height})
    (var-set access-ctrl-counter id)
    (ok id)))
(define-public (update-access-ctrl (id uint) (new-val uint))
  (let ((entry (unwrap! (map-get? access-ctrl-registry id) (err u601))))
    (asserts! (is-eq tx-sender (get owner entry)) (err u602))
    (asserts! (get active entry) (err u603))
    (ok (map-set access-ctrl-registry id (merge entry {value: new-val})))))
(define-public (deactivate-access-ctrl (id uint))
  (let ((entry (unwrap! (map-get? access-ctrl-registry id) (err u601))))
    (asserts! (is-eq tx-sender (get owner entry)) (err u602))
    (ok (map-set access-ctrl-registry id (merge entry {active: false})))))
(define-read-only (get-access-ctrl-entry (id uint))
  (map-get? access-ctrl-registry id))
(define-read-only (get-access-ctrl-count)
  (ok (var-get access-ctrl-counter)))
(define-read-only (is-access-ctrl-active (id uint))
  (match (map-get? access-ctrl-registry id)
    entry (get active entry)
    false))
(define-read-only (get-access-ctrl-owner (id uint))
  (match (map-get? access-ctrl-registry id)
    entry (ok (get owner entry))
    (err u601)))
(define-read-only (get-access-ctrl-value (id uint))
  (default-to u0 (get value (map-get? access-ctrl-registry id))))

;; rate-limit module
(define-map rate-limit-registry uint {owner: principal, value: uint, active: bool, created: uint})
(define-data-var rate-limit-counter uint u0)
(define-public (create-rate-limit (val uint))
  (let ((id (+ (var-get rate-limit-counter) u1)))
    (asserts! (> val u0) (err u610))
    (map-set rate-limit-registry id {owner: tx-sender, value: val, active: true, created: stacks-block-height})
    (var-set rate-limit-counter id)
    (ok id)))
(define-public (update-rate-limit (id uint) (new-val uint))
  (let ((entry (unwrap! (map-get? rate-limit-registry id) (err u611))))
    (asserts! (is-eq tx-sender (get owner entry)) (err u612))
    (asserts! (get active entry) (err u613))
    (ok (map-set rate-limit-registry id (merge entry {value: new-val})))))
(define-public (deactivate-rate-limit (id uint))
  (let ((entry (unwrap! (map-get? rate-limit-registry id) (err u611))))
    (asserts! (is-eq tx-sender (get owner entry)) (err u612))
    (ok (map-set rate-limit-registry id (merge entry {active: false})))))
(define-read-only (get-rate-limit-entry (id uint))
  (map-get? rate-limit-registry id))
(define-read-only (get-rate-limit-count)
  (ok (var-get rate-limit-counter)))
(define-read-only (is-rate-limit-active (id uint))
  (match (map-get? rate-limit-registry id)
    entry (get active entry)
    false))
(define-read-only (get-rate-limit-owner (id uint))
  (match (map-get? rate-limit-registry id)
    entry (ok (get owner entry))
    (err u611)))
(define-read-only (get-rate-limit-value (id uint))
  (default-to u0 (get value (map-get? rate-limit-registry id))))

;; batch-ops module
(define-map batch-ops-registry uint {owner: principal, value: uint, active: bool, created: uint})
(define-data-var batch-ops-counter uint u0)
(define-public (create-batch-ops (val uint))
  (let ((id (+ (var-get batch-ops-counter) u1)))
    (asserts! (> val u0) (err u620))
    (map-set batch-ops-registry id {owner: tx-sender, value: val, active: true, created: stacks-block-height})
    (var-set batch-ops-counter id)
    (ok id)))
