;; title: yield-aggregator
;; version: 2.1.0
;; summary: Institutional sBTC Yield Aggregator - Clarity 4
;; description: Core yield optimization platform for institutional users

;; traits
(use-trait sip-010-trait .sip010-trait.sip-010-trait)

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
(define-constant ERR_CONTRACT_PAUSED (err u108))

;; data vars
(define-data-var contract-initialized bool false)
(define-data-var total-deposits uint u0)
(define-data-var total-yield-earned uint u0)
(define-data-var emergency-pause bool false)
(define-data-var withdrawal-counter uint u0)

;; data maps
(define-map user-deposits principal uint)
(define-map user-yield-earned principal uint)
(define-map deposit-history principal (list 100 {amount: uint, timestamp: uint, block-height: uint}))
(define-map withdrawal-history uint {user: principal, amount: uint, block-height: uint})

;; Deposit tiers for yield bonus
(define-constant TIER_BRONZE u0)
(define-constant TIER_SILVER u1)
(define-constant TIER_GOLD u2)
(define-constant TIER_PLATINUM u3)

(define-constant TIER_SILVER_THRESHOLD u10000000) ;; 10M sats
(define-constant TIER_GOLD_THRESHOLD u50000000)   ;; 50M sats
(define-constant TIER_PLATINUM_THRESHOLD u100000000) ;; 100M sats

;; Tier-based yield bonus in basis points (added on top of base yield)
(define-constant TIER_BONUS_BRONZE u0)       ;; 0% bonus
(define-constant TIER_BONUS_SILVER u500)     ;; 5% bonus
(define-constant TIER_BONUS_GOLD u1000)      ;; 10% bonus
(define-constant TIER_BONUS_PLATINUM u2000)  ;; 20% bonus

(define-map user-tier principal uint)

;; Per-user deposit cap
(define-data-var max-deposit-per-user uint u500000000) ;; 500M sats default cap
;; Global TVL cap
(define-data-var max-total-deposits uint u5000000000) ;; 5B sats
;; Minimum deposit amount (0.01 sBTC = 1,000,000 sats)
(define-data-var min-deposit-amount uint u1000000)

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
    (asserts! (not (var-get emergency-pause)) ERR_CONTRACT_PAUSED)
    (asserts! (>= amount (var-get min-deposit-amount)) ERR_INVALID_AMOUNT)
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
    (asserts! (not (var-get emergency-pause)) ERR_CONTRACT_PAUSED)
    (asserts! (> amount u0) ERR_INVALID_AMOUNT)
    (asserts! (<= amount total-available) ERR_INSUFFICIENT_BALANCE)

    ;; Transfer tokens back from contract vault to user via contract-as-sender helper
    (match (vault-transfer token amount caller)
      success (begin
        ;; Update user balances
        (let ((new-deposit
          (if (<= amount user-deposit)
            (begin
              (map-set user-yield-earned caller user-yield)
              (- user-deposit amount))
            (begin
              (map-set user-yield-earned caller (- user-yield (- amount user-deposit)))
              u0)
          )))
          (map-set user-deposits caller new-deposit)
          ;; Recalculate and update user tier based on new deposit
          (map-set user-tier caller (calculate-tier new-deposit))
          ;; Update total deposits
          (var-set total-deposits (- (var-get total-deposits) (min amount user-deposit)))
          ;; Record withdrawal in history
          (let ((withdrawal-id (var-get withdrawal-counter)))
            (map-set withdrawal-history withdrawal-id
              {user: caller, amount: amount, block-height: stacks-block-height})
            (var-set withdrawal-counter (+ withdrawal-id u1))
          )
          (print {event: "withdrawal", user: caller, amount: amount, new-tier: (calculate-tier new-deposit)})
          (ok true)
        )
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

;; Distribute yield to specific user proportionally (owner only)
(define-public (distribute-to-user (user principal) (total-yield uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (var-get contract-initialized) ERR_NOT_INITIALIZED)
    (asserts! (> total-yield u0) ERR_INVALID_AMOUNT)

    (let (
      (user-share (calculate-user-yield user total-yield))
      (current-yield (default-to u0 (map-get? user-yield-earned user)))
    )
      (if (> user-share u0)
        (begin
          (map-set user-yield-earned user (+ current-yield user-share))
          (var-set total-yield-earned (+ (var-get total-yield-earned) user-share))
          (print {event: "yield-distributed-to-user", user: user, share: user-share, total-yield: total-yield})
          (ok user-share)
        )
        (ok u0)
      )
    )
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

;; Admin: set minimum deposit amount
(define-public (set-minimum-deposit (new-min uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (> new-min u0) ERR_INVALID_AMOUNT)
    (var-set min-deposit-amount new-min)
    (print {event: "min-deposit-updated", new-min: new-min, by: tx-sender})
    (ok true)))

;; Auto-compound: move earned yield into deposit balance
;; This increases the user's principal, so future yield calculations
;; are based on a larger deposit, creating a compounding effect.
(define-public (auto-compound)
  (let (
    (caller tx-sender)
    (user-yield (default-to u0 (map-get? user-yield-earned caller)))
    (current-deposit (default-to u0 (map-get? user-deposits caller)))
    (new-deposit (+ current-deposit user-yield))
  )
    (asserts! (var-get contract-initialized) ERR_NOT_INITIALIZED)
    (asserts! (not (var-get emergency-pause)) ERR_CONTRACT_PAUSED)
    (asserts! (> user-yield u0) ERR_INVALID_AMOUNT)
    (asserts! (<= new-deposit (var-get max-deposit-per-user)) ERR_INVALID_AMOUNT)
    (asserts! (<= (+ (var-get total-deposits) user-yield) (var-get max-total-deposits)) ERR_INVALID_AMOUNT)

    ;; Move yield into deposit
    (map-set user-deposits caller new-deposit)
    (map-set user-yield-earned caller u0)
    ;; Update tier based on new deposit total
    (map-set user-tier caller (calculate-tier new-deposit))
    ;; Increase total deposits by compounded yield
    (var-set total-deposits (+ (var-get total-deposits) user-yield))
    (print {event: "auto-compound", user: caller, compounded: user-yield, new-deposit: new-deposit})
    (ok user-yield)
  )
)

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

;; Get yield bonus for a user based on their tier (basis points)
(define-read-only (get-user-tier-bonus (user principal))
  (ok (get-tier-bonus (default-to TIER_BRONZE (map-get? user-tier user)))))

;; Get user deposit history
(define-read-only (get-user-deposit-history (user principal))
  (ok (default-to (list) (map-get? deposit-history user)))
)

;; Get minimum deposit amount
(define-read-only (get-minimum-deposit)
  (ok (var-get min-deposit-amount)))

;; Get withdrawal record by ID
(define-read-only (get-withdrawal-record (id uint))
  (ok (map-get? withdrawal-history id)))

;; Get total withdrawal count
(define-read-only (get-withdrawal-count)
  (ok (var-get withdrawal-counter)))

;; Get user share of total deposits as basis points (100 = 1%)
(define-read-only (get-user-share (user principal))
  (let (
    (user-deposit (default-to u0 (map-get? user-deposits user)))
    (total (var-get total-deposits))
  )
    (if (> total u0)
      (ok (/ (* user-deposit u10000) total))
      (ok u0)
    )
  )
)

;; private functions

;; Transfer tokens from vault (contract) to a recipient using as-contract
(define-private (vault-transfer (token <sip-010-trait>) (amount uint) (recipient principal))
  (as-contract (contract-call? token transfer amount tx-sender recipient none))
)

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

;; Get yield bonus for a given tier (basis points)
(define-private (get-tier-bonus (tier uint))
  (if (is-eq tier TIER_PLATINUM) TIER_BONUS_PLATINUM
    (if (is-eq tier TIER_GOLD) TIER_BONUS_GOLD
      (if (is-eq tier TIER_SILVER) TIER_BONUS_SILVER
        TIER_BONUS_BRONZE))))

;; Calculate proportional yield for a user with tier bonus
(define-private (calculate-user-yield (user principal) (total-yield uint))
  (let (
    (user-deposit (default-to u0 (map-get? user-deposits user)))
    (contract-total-deposits (var-get total-deposits))
    (user-current-tier (default-to TIER_BRONZE (map-get? user-tier user)))
    (tier-bonus (get-tier-bonus user-current-tier))
  )
    (if (> contract-total-deposits u0)
      (let ((base-yield (/ (* user-deposit total-yield) contract-total-deposits)))
        ;; Apply tier bonus: base-yield * (10000 + bonus) / 10000
        (/ (* base-yield (+ u10000 tier-bonus)) u10000))
      u0
    )
  )
)
