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
(define-data-var governance-action-count uint u0)
(define-data-var min-deposit-amount uint u1000)
(define-data-var max-withdrawal-pct uint u100)

;; data maps
(define-map user-deposits principal uint)
(define-map user-yield-earned principal uint)
(define-map deposit-history principal (list 100 {amount: uint, timestamp: uint, block-height: uint}))
(define-map user-deposit-count principal uint)
(define-map user-first-deposit-block principal uint)

;; Deposit reward tiers by deposit count
;; Tier 1: 1-4 deposits = 0 bonus
;; Tier 2: 5-9 deposits = 50 bps bonus
;; Tier 3: 10+ deposits = 100 bps bonus

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

    ;; Transfer tokens from user to this contract (vault)
    (match (contract-call? token transfer amount tx-sender (as-contract tx-sender) none)
      success (begin
        (map-set user-deposits tx-sender (+ current-user-deposit amount))
        (var-set total-deposits (+ (var-get total-deposits) amount))
        (let ((current-history (default-to (list) (map-get? deposit-history tx-sender))))
          (map-set deposit-history tx-sender
            (unwrap-panic (as-max-len?
              (append current-history {amount: amount, timestamp: stacks-block-height, block-height: stacks-block-height})
              u100))))
        ;; Update deposit count and first deposit block
        (let ((prev-count (default-to u0 (map-get? user-deposit-count tx-sender))))
          (map-set user-deposit-count tx-sender (+ prev-count u1))
          (if (is-eq prev-count u0)
            (map-set user-first-deposit-block tx-sender stacks-block-height)
            true))
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
          (map-set user-deposits caller (- user-deposit amount))
          (begin
            (map-set user-deposits caller u0)
            (map-set user-yield-earned caller (- total-available amount))
          )
        )
        ;; Update total deposits
        (var-set total-deposits (- (var-get total-deposits) (if (<= amount user-deposit) amount user-deposit)))
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

;; Get user deposit history
(define-read-only (get-user-deposit-history (user principal))
  (ok (default-to (list) (map-get? deposit-history user)))
)

(define-read-only (get-yield-analytics)
  {
    total-deposits: (var-get total-deposits),
    total-yield-earned: (var-get total-yield-earned),
    is-paused: (var-get emergency-pause),
    is-initialized: (var-get initialized)
  }
)

(define-read-only (get-user-yield-ratio (user principal))
  (let (
    (user-dep (default-to u0 (map-get? user-deposits user)))
    (total-dep (var-get total-deposits))
  )
    (if (> total-dep u0)
      (some (/ (* user-dep u10000) total-dep))
      none)
  )
)

(define-read-only (get-user-deposit-count (user principal))
  (default-to u0 (map-get? user-deposit-count user))
)

(define-read-only (get-user-tier (user principal))
  (let ((count (default-to u0 (map-get? user-deposit-count user))))
    (if (>= count u10)
      u3
      (if (>= count u5)
        u2
        u1))
  )
)

(define-read-only (get-user-tier-bonus (user principal))
  (let ((tier (get-user-tier user)))
    (if (is-eq tier u3)
      u100
      (if (is-eq tier u2)
        u50
        u0))
  )
)

(define-read-only (get-user-first-deposit-block (user principal))
  (map-get? user-first-deposit-block user)
)

(define-read-only (get-governance-params)
  {
    min-deposit: (var-get min-deposit-amount),
    max-withdrawal-pct: (var-get max-withdrawal-pct),
    governance-actions: (var-get governance-action-count)
  }
)

(define-read-only (get-min-deposit)
  (var-get min-deposit-amount)
)

(define-public (set-min-deposit (amount uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (var-set min-deposit-amount amount)
    (var-set governance-action-count (+ (var-get governance-action-count) u1))
    (ok true)
  )
)

;; private functions

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

;; Yield optimization: rebalance threshold and target protocol
(define-data-var rebalance-threshold uint u50)
(define-data-var target-protocol uint u1)
(define-data-var optimization-enabled bool true)

(define-read-only (get-optimization-params)
  {
    rebalance-threshold: (var-get rebalance-threshold),
    target-protocol: (var-get target-protocol),
    optimization-enabled: (var-get optimization-enabled)
  })

(define-public (set-rebalance-threshold (threshold uint))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (var-set rebalance-threshold threshold)
    (ok true)))

(define-public (set-optimization-enabled (enabled bool))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (var-set optimization-enabled enabled)
    (ok true)))

;; Institutional reporting: portfolio snapshots
(define-map portfolio-snapshots uint { total-deposits: uint, total-yield: uint, snapshot-block: uint })
(define-data-var snapshot-count uint u0)

(define-read-only (get-portfolio-report)
  {
    total-deposits: (var-get total-deposits),
    total-yield-earned: (var-get total-yield-earned),
    snapshot-count: (var-get snapshot-count),
    report-block: stacks-block-height
  })

(define-public (take-portfolio-snapshot)
  (let ((count (var-get snapshot-count)))
    (map-set portfolio-snapshots count {
      total-deposits: (var-get total-deposits),
      total-yield: (var-get total-yield-earned),
      snapshot-block: stacks-block-height
    })
    (var-set snapshot-count (+ count u1))
    (ok count)))

(define-read-only (get-snapshot (id uint))
  (map-get? portfolio-snapshots id))

;; Risk management: exposure limits and circuit breakers
(define-data-var max-single-deposit uint u1000000000)
(define-data-var daily-withdraw-limit uint u500000000)
(define-data-var risk-level uint u1)

(define-read-only (get-risk-params)
  {
    max-single-deposit: (var-get max-single-deposit),
    daily-withdraw-limit: (var-get daily-withdraw-limit),
    risk-level: (var-get risk-level)
  })

(define-public (set-risk-level (level uint))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (asserts! (<= level u3) (err u108))
    (var-set risk-level level)
    (ok true)))

(define-public (set-max-single-deposit (amount uint))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (var-set max-single-deposit amount)
    (ok true)))

;; Multi-asset support: track supported assets
(define-map supported-assets principal bool)
(define-data-var asset-count uint u1)

(define-read-only (is-supported-asset (asset principal))
  (default-to false (map-get? supported-assets asset)))

(define-public (add-supported-asset (asset principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (map-set supported-assets asset true)
    (var-set asset-count (+ (var-get asset-count) u1))
    (ok true)))

(define-public (remove-supported-asset (asset principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (map-set supported-assets asset false)
    (ok true)))

(define-read-only (get-asset-count)
  (var-get asset-count))

;; Enhanced emergency controls
(define-data-var emergency-contact principal CONTRACT_OWNER)
(define-data-var last-pause-block uint u0)
(define-data-var pause-count uint u0)

(define-read-only (get-emergency-state)
  {
    is-paused: (var-get emergency-pause),
    last-pause-block: (var-get last-pause-block),
    pause-count: (var-get pause-count),
    emergency-contact: (var-get emergency-contact)
  })

(define-public (emergency-pause-with-log)
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (var-set emergency-pause true)
    (var-set last-pause-block stacks-block-height)
    (var-set pause-count (+ (var-get pause-count) u1))
    (ok true)))

(define-public (emergency-resume)
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (var-set emergency-pause false)
    (ok true)))

;; Performance metrics: track protocol performance
(define-data-var total-transactions uint u0)
(define-data-var total-deposits-count uint u0)
(define-data-var total-withdrawals-count uint u0)

(define-read-only (get-performance-metrics)
  {
    total-transactions: (var-get total-transactions),
    total-deposits-count: (var-get total-deposits-count),
    total-withdrawals-count: (var-get total-withdrawals-count),
    total-value-locked: (var-get total-deposits),
    avg-yield-bps: (if (> (var-get total-deposits-count) u0)
      (/ (* (var-get total-yield-earned) u10000) (var-get total-deposits))
      u0)
  })

(define-read-only (get-protocol-uptime)
  (- stacks-block-height (var-get last-pause-block)))

;; Vault yield strategies
(define-map vault-strategies uint { name: (string-ascii 32), target-apy: uint, active: bool, strategy-type: uint })
(define-data-var strategy-count uint u3)
(define-data-var active-strategy uint u1)

(define-read-only (get-strategy (id uint))
  (map-get? vault-strategies id))

(define-read-only (get-strategy-params)
  { strategy-count: (var-get strategy-count), active-strategy: (var-get active-strategy) })

(define-public (add-vault-strategy (name (string-ascii 32)) (target-apy uint) (strategy-type uint))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (let ((id (+ (var-get strategy-count) u1)))
      (map-set vault-strategies id { name: name, target-apy: target-apy, active: true, strategy-type: strategy-type })
      (var-set strategy-count id)
      (ok id))))

(define-public (set-active-strategy (id uint))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (asserts! (<= id (var-get strategy-count)) (err u110))
    (var-set active-strategy id)
    (ok true)))

;; Fee management system
(define-data-var protocol-fee-bps uint u30)
(define-data-var fee-recipient principal (var-get contract-owner))
(define-data-var total-fees-collected uint u0)
(define-data-var fee-distribution-count uint u0)

(define-read-only (get-fee-params)
  { fee-bps: (var-get protocol-fee-bps), total-collected: (var-get total-fees-collected) })

(define-public (set-protocol-fee (fee uint))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (asserts! (<= fee u300) (err u120))
    (var-set protocol-fee-bps fee)
    (ok true)))

(define-public (set-fee-recipient (recipient principal))
  (begin
    (asserts! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (var-set fee-recipient recipient)
    (ok true)))

(define-public (collect-fees (amount uint))
  (begin
    (asserts! (> amount u0) (err u121))
    (var-set total-fees-collected (+ (var-get total-fees-collected) amount))
    (var-set fee-distribution-count (+ (var-get fee-distribution-count) u1))
    (ok true)))

;; Referral tracking system
(define-map referrals principal { referrer: principal, reward-earned: uint, referred-at: uint })
(define-data-var referral-count uint u0)
(define-data-var referral-bonus-bps uint u25)

(define-read-only (get-referral-params)
  { referral-count: (var-get referral-count), bonus-bps: (var-get referral-bonus-bps) })

(define-read-only (get-referral (user principal))
  (map-get? referrals user))

(define-public (register-referral (referrer principal))
  (begin
    (asserts\! (not (is-eq tx-sender referrer)) (err u130))
    (map-set referrals tx-sender { referrer: referrer, reward-earned: u0, referred-at: stacks-block-height })
    (var-set referral-count (+ (var-get referral-count) u1))
    (ok true)))

;; Auto-compounding yield
(define-data-var auto-compound-enabled bool true)
(define-data-var compound-frequency uint u100)
(define-data-var total-compounds uint u0)
(define-map compound-schedules principal { last-compound: uint, frequency: uint, active: bool })

(define-read-only (get-compound-params)
  { enabled: (var-get auto-compound-enabled), frequency: (var-get compound-frequency), total: (var-get total-compounds) })

(define-read-only (get-compound-schedule (user principal))
  (map-get? compound-schedules user))

(define-public (enable-auto-compound (frequency uint))
  (begin
    (asserts\! (> frequency u0) (err u140))
    (map-set compound-schedules tx-sender { last-compound: stacks-block-height, frequency: frequency, active: true })
    (ok true)))

(define-public (execute-compound)
  (begin
    (var-set total-compounds (+ (var-get total-compounds) u1))
    (ok true)))
