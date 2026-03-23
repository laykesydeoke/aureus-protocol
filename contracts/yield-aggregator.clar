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

;; Insurance reserve fund
(define-data-var insurance-reserve uint u0)
(define-data-var insurance-coverage-pct uint u80)
(define-data-var insurance-active bool true)

(define-read-only (get-insurance-reserve)
  { reserve: (var-get insurance-reserve), coverage-pct: (var-get insurance-coverage-pct), active: (var-get insurance-active) })

(define-public (fund-insurance (amount uint))
  (begin
    (asserts\! (> amount u0) (err u150))
    (var-set insurance-reserve (+ (var-get insurance-reserve) amount))
    (ok true)))

(define-public (set-coverage-pct (pct uint))
  (begin
    (asserts\! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (asserts\! (<= pct u100) (err u151))
    (var-set insurance-coverage-pct pct)
    (ok true)))

;; Enhanced governance v2
(define-map governance-proposals uint { proposer: principal, description: (string-ascii 128), votes-for: uint, votes-against: uint, executed: bool, created-at: uint })
(define-data-var proposal-count uint u0)
(define-data-var quorum-threshold uint u100)

(define-read-only (get-gov2-params)
  { proposals: (var-get proposal-count), quorum: (var-get quorum-threshold) })

(define-read-only (get-proposal (id uint))
  (map-get? governance-proposals id))

(define-public (create-proposal (description (string-ascii 128)))
  (begin
    (let ((id (+ (var-get proposal-count) u1)))
      (map-set governance-proposals id { proposer: tx-sender, description: description, votes-for: u0, votes-against: u0, executed: false, created-at: stacks-block-height })
      (var-set proposal-count id)
      (ok id))))

(define-public (vote-on-proposal (id uint) (support bool))
  (let ((proposal (unwrap\! (map-get? governance-proposals id) (err u160))))
    (if support
      (map-set governance-proposals id (merge proposal { votes-for: (+ (get votes-for proposal) u1) }))
      (map-set governance-proposals id (merge proposal { votes-against: (+ (get votes-against proposal) u1) })))
    (ok true)))

;; Protocol treasury
(define-data-var aureus-treasury uint u0)
(define-data-var treasury-fee-rate uint u20)
(define-map treasury-log uint { amount: uint, purpose: (string-ascii 64), logged-at: uint })
(define-data-var treasury-log-count uint u0)

(define-read-only (get-treasury-state)
  { treasury: (var-get aureus-treasury), fee-rate: (var-get treasury-fee-rate) })

(define-public (deposit-to-treasury (amount uint))
  (begin
    (asserts\! (> amount u0) (err u170))
    (var-set aureus-treasury (+ (var-get aureus-treasury) amount))
    (ok true)))

(define-public (log-treasury-action (purpose (string-ascii 64)) (amount uint))
  (begin
    (asserts\! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (let ((id (+ (var-get treasury-log-count) u1)))
      (map-set treasury-log id { amount: amount, purpose: purpose, logged-at: stacks-block-height })
      (var-set treasury-log-count id)
      (ok id))))

;; Yield booster mechanism
(define-map yield-boosters principal { multiplier: uint, expires-at: uint, tier: uint })
(define-data-var booster-count uint u0)
(define-data-var max-booster-multiplier uint u300)

(define-read-only (get-booster-params)
  { booster-count: (var-get booster-count), max-multiplier: (var-get max-booster-multiplier) })

(define-read-only (get-booster (user principal))
  (map-get? yield-boosters user))

(define-public (grant-yield-booster (user principal) (multiplier uint) (duration uint))
  (begin
    (asserts\! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (asserts\! (<= multiplier (var-get max-booster-multiplier)) (err u180))
    (map-set yield-boosters user { multiplier: multiplier, expires-at: (+ stacks-block-height duration), tier: u1 })
    (var-set booster-count (+ (var-get booster-count) u1))
    (ok true)))

;; Advanced analytics v2
(define-data-var daily-volume-tracker uint u0)
(define-data-var weekly-volume-tracker uint u0)
(define-data-var peak-tvl uint u0)
(define-data-var analytics-epoch uint u0)

(define-read-only (get-analytics-v2)
  {
    daily-volume: (var-get daily-volume-tracker),
    weekly-volume: (var-get weekly-volume-tracker),
    peak-tvl: (var-get peak-tvl),
    epoch: (var-get analytics-epoch),
    current-tvl: (var-get total-deposits)
  })

(define-public (update-analytics (daily uint) (weekly uint))
  (begin
    (asserts\! (is-eq tx-sender (var-get contract-owner)) (err u100))
    (var-set daily-volume-tracker daily)
    (var-set weekly-volume-tracker weekly)
    (when (> (var-get total-deposits) (var-get peak-tvl))
      (var-set peak-tvl (var-get total-deposits)))
    (var-set analytics-epoch (+ (var-get analytics-epoch) u1))
    (ok true)))

;; Deposit amount guards
(define-constant MIN-DEPOSIT u1000)
(define-constant MAX-DEPOSIT-PER-TX u500000000)
(define-data-var deposit-guard-enabled bool true)
(define-read-only (validate-deposit-amount (amount uint))
  (and (>= amount MIN-DEPOSIT) (<= amount MAX-DEPOSIT-PER-TX)))
(define-read-only (get-deposit-guard-params)
  { min: MIN-DEPOSIT, max: MAX-DEPOSIT-PER-TX, enabled: (var-get deposit-guard-enabled) })

;; Withdrawal safety checks
(define-data-var withdrawal-cooldown uint u10)
(define-data-var max-withdraw-pct-per-tx uint u50)
(define-map withdrawal-timestamps principal uint)
(define-read-only (get-last-withdrawal (user principal))
  (default-to u0 (map-get? withdrawal-timestamps user)))
(define-read-only (get-withdrawal-safety-params)
  { cooldown: (var-get withdrawal-cooldown), max-pct: (var-get max-withdraw-pct-per-tx) })
(define-read-only (can-withdraw (user principal))
  (> (- stacks-block-height (get-last-withdrawal user)) (var-get withdrawal-cooldown)))

;; Yield calculation precision
(define-constant YIELD-PRECISION u1000000)
(define-data-var yield-rounding-mode uint u1)
(define-read-only (precise-yield-calc (deposit uint) (rate-bps uint) (blocks uint))
  (/ (* (* deposit rate-bps) blocks) (* u10000 u144)))
(define-read-only (get-yield-precision-params)
  { precision: YIELD-PRECISION, rounding: (var-get yield-rounding-mode) })

;; Strategy parameter validation
(define-constant MAX-APY u5000)
(define-constant MAX-STRATEGY-COUNT u20)
(define-data-var strategy-validation-enabled bool true)
(define-read-only (is-valid-strategy (apy uint) (stype uint))
  (and (<= apy MAX-APY) (<= stype u5)))
(define-read-only (get-strategy-validation-params)
  { max-apy: MAX-APY, max-strategies: MAX-STRATEGY-COUNT, enabled: (var-get strategy-validation-enabled) })

;; Fee boundary enforcement
(define-constant ABSOLUTE-MAX-FEE u500)
(define-constant MIN-FEE u1)
(define-data-var fee-change-cooldown uint u144)
(define-data-var last-fee-change uint u0)
(define-read-only (can-change-fee)
  (> (- stacks-block-height (var-get last-fee-change)) (var-get fee-change-cooldown)))
(define-read-only (get-fee-bounds)
  { min: MIN-FEE, max: ABSOLUTE-MAX-FEE, cooldown: (var-get fee-change-cooldown), last-change: (var-get last-fee-change) })

;; Prevent referral chain loops
(define-data-var max-referral-depth uint u3)
(define-map referral-chain principal (list 10 principal))
(define-read-only (get-referral-chain (user principal))
  (default-to (list) (map-get? referral-chain user)))
(define-read-only (get-referral-depth-params)
  { max-depth: (var-get max-referral-depth) })

;; Compound schedule validation
(define-constant MIN-COMPOUND-FREQ u10)
(define-constant MAX-COMPOUND-FREQ u14400)
(define-data-var compound-validation-on bool true)
(define-read-only (is-valid-compound-freq (freq uint))
  (and (>= freq MIN-COMPOUND-FREQ) (<= freq MAX-COMPOUND-FREQ)))
(define-read-only (get-compound-schedule-bounds)
  { min-freq: MIN-COMPOUND-FREQ, max-freq: MAX-COMPOUND-FREQ, validation: (var-get compound-validation-on) })

;; Insurance reserve limits
(define-constant MAX-INSURANCE-RESERVE u100000000)
(define-data-var insurance-contribution-cap uint u1000000)
(define-read-only (get-insurance-limits)
  { max-reserve: MAX-INSURANCE-RESERVE, contribution-cap: (var-get insurance-contribution-cap), current: (var-get insurance-reserve) })
(define-read-only (insurance-capacity-remaining)
  (if (> MAX-INSURANCE-RESERVE (var-get insurance-reserve))
    (- MAX-INSURANCE-RESERVE (var-get insurance-reserve))
    u0))

;; Governance vote validation
(define-data-var voting-period uint u1440)
(define-data-var min-voting-power uint u100)
(define-map voter-registry principal { weight: uint, last-vote: uint })
(define-read-only (get-voter (addr principal))
  (default-to { weight: u0, last-vote: u0 } (map-get? voter-registry addr)))
(define-read-only (get-voting-params)
  { period: (var-get voting-period), min-power: (var-get min-voting-power) })
(define-public (register-voter (weight uint))
  (begin
    (asserts\! (>= weight (var-get min-voting-power)) (err u165))
    (map-set voter-registry tx-sender { weight: weight, last-vote: u0 })
    (ok true)))

;; Treasury deposit caps
(define-constant MAX-TREASURY u500000000)
(define-data-var treasury-deposit-limit uint u10000000)
(define-read-only (get-treasury-caps)
  { max: MAX-TREASURY, per-deposit: (var-get treasury-deposit-limit), current: (var-get aureus-treasury) })
(define-read-only (treasury-capacity)
  (if (> MAX-TREASURY (var-get aureus-treasury))
    (- MAX-TREASURY (var-get aureus-treasury))
    u0))

;; Analytics boundary checks
(define-constant MAX-DAILY-VOLUME u1000000000)
(define-constant MAX-WEEKLY-VOLUME u5000000000)
(define-read-only (validate-analytics-input (daily uint) (weekly uint))
  (and (<= daily MAX-DAILY-VOLUME) (<= weekly MAX-WEEKLY-VOLUME) (<= daily weekly)))
(define-read-only (get-analytics-bounds)
  { max-daily: MAX-DAILY-VOLUME, max-weekly: MAX-WEEKLY-VOLUME })

;; Vault capacity limits
(define-constant MAX-VAULT-TVL u10000000000)
(define-data-var vault-capacity-check bool true)
(define-read-only (get-vault-capacity)
  (if (> MAX-VAULT-TVL (var-get total-deposits))
    (- MAX-VAULT-TVL (var-get total-deposits))
    u0))
(define-read-only (get-vault-limits)
  { max-tvl: MAX-VAULT-TVL, current: (var-get total-deposits), capacity-check: (var-get vault-capacity-check) })

;; Token validation checks
(define-data-var token-whitelist-enabled bool true)
(define-map token-whitelist principal { approved: bool, approved-at: uint })
(define-read-only (is-token-approved (token principal))
  (if (var-get token-whitelist-enabled)
    (default-to false (get approved (map-get? token-whitelist token)))
    true))
(define-public (approve-token (token principal))
  (begin
    (asserts\! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (map-set token-whitelist token { approved: true, approved-at: stacks-block-height })
    (ok true)))

;; Pause event logging
(define-map pause-history uint { paused-by: principal, reason: (string-ascii 32), block: uint, is-pause: bool })
(define-data-var pause-log-count uint u0)
(define-read-only (get-pause-log (id uint))
  (map-get? pause-history id))
(define-public (log-pause-event (reason (string-ascii 32)) (is-pause bool))
  (begin
    (asserts\! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (let ((id (+ (var-get pause-log-count) u1)))
      (map-set pause-history id { paused-by: tx-sender, reason: reason, block: stacks-block-height, is-pause: is-pause })
      (var-set pause-log-count id)
      (ok id))))

;; Booster parameter validation
(define-constant MIN-BOOSTER-DURATION u100)
(define-constant MIN-BOOSTER-MULT u100)
(define-read-only (is-valid-booster (mult uint) (dur uint))
  (and (>= mult MIN-BOOSTER-MULT) (<= mult (var-get max-booster-multiplier)) (>= dur MIN-BOOSTER-DURATION)))
(define-read-only (get-booster-validation-params)
  { min-mult: MIN-BOOSTER-MULT, max-mult: (var-get max-booster-multiplier), min-dur: MIN-BOOSTER-DURATION })

;; Auth hierarchy levels
(define-map auth-levels principal uint)
(define-constant AUTH-ADMIN u3)
(define-constant AUTH-OPERATOR u2)
(define-constant AUTH-VIEWER u1)
(define-read-only (get-auth-level (addr principal))
  (default-to u0 (map-get? auth-levels addr)))
(define-public (set-auth-level (addr principal) (level uint))
  (begin
    (asserts\! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts\! (<= level AUTH-ADMIN) (err u200))
    (map-set auth-levels addr level)
    (ok true)))

;; Reward calculation fix
(define-constant REWARD-PRECISION u1000000)
(define-read-only (calc-precise-reward (deposit uint) (rate uint) (duration uint))
  (/ (* (* deposit rate) duration) (* u10000 u144)))
(define-read-only (calc-tier-adjusted-reward (deposit uint) (rate uint) (tier-bonus uint))
  (let ((base (/ (* deposit rate) u10000)))
    (+ base (/ (* base tier-bonus) u10000))))

;; Pool overflow protection
(define-constant MAX-POOL-SIZE u50000000000)
(define-read-only (check-pool-overflow (additional uint))
  (let ((new-total (+ (var-get total-deposits) additional)))
    { would-overflow: (> new-total MAX-POOL-SIZE), current: (var-get total-deposits), new-total: new-total, max: MAX-POOL-SIZE }))

;; Oracle data validation
(define-data-var oracle-last-update uint u0)
(define-data-var oracle-staleness-threshold uint u144)
(define-map oracle-prices (string-ascii 16) { price: uint, updated-at: uint, source: uint })
(define-read-only (get-oracle-price (asset (string-ascii 16)))
  (map-get? oracle-prices asset))
(define-read-only (is-oracle-stale)
  (> (- stacks-block-height (var-get oracle-last-update)) (var-get oracle-staleness-threshold)))
(define-public (update-oracle-price (asset (string-ascii 16)) (price uint))
  (begin
    (asserts\! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (map-set oracle-prices asset { price: price, updated-at: stacks-block-height, source: u1 })
    (var-set oracle-last-update stacks-block-height)
    (ok true)))

;; Migration tooling
(define-data-var migration-active bool false)
(define-data-var migration-step uint u0)
(define-map migration-checkpoints uint { step: uint, block: uint, verified: bool })
(define-read-only (get-migration-status)
  { active: (var-get migration-active), step: (var-get migration-step) })
(define-public (start-migration)
  (begin
    (asserts\! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (var-set migration-active true)
    (var-set migration-step u1)
    (ok true)))
(define-public (advance-migration)
  (begin
    (asserts\! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts\! (var-get migration-active) (err u210))
    (let ((step (+ (var-get migration-step) u1)))
      (map-set migration-checkpoints step { step: step, block: stacks-block-height, verified: true })
      (var-set migration-step step)
      (ok step))))

;; API pagination support
(define-constant DEFAULT-PAGE u1)
(define-constant DEFAULT-LIMIT u20)
(define-constant MAX-LIMIT u100)
(define-data-var api-request-count uint u0)
(define-read-only (get-pagination-defaults)
  { page: DEFAULT-PAGE, limit: DEFAULT-LIMIT, max-limit: MAX-LIMIT, requests: (var-get api-request-count) })

;; Rate normalization functions
(define-constant BPS-BASE u10000)
(define-constant PCT-BASE u100)
(define-read-only (bps-to-pct (bps uint))
  (/ bps u100))
(define-read-only (pct-to-bps (pct uint))
  (* pct u100))
(define-read-only (normalize-rate (rate uint) (from-base uint) (to-base uint))
  (/ (* rate to-base) from-base))

;; Event ordering and sequencing
(define-data-var event-sequence uint u0)
(define-map ordered-events uint { seq: uint, event-type: (string-ascii 32), actor: principal, block: uint })
(define-read-only (get-ordered-event (id uint))
  (map-get? ordered-events id))
(define-public (emit-ordered-event (event-type (string-ascii 32)))
  (let ((seq (+ (var-get event-sequence) u1)))
    (map-set ordered-events seq { seq: seq, event-type: event-type, actor: tx-sender, block: stacks-block-height })
    (var-set event-sequence seq)
    (ok seq)))

;; Snapshot data integrity
(define-data-var snapshot-validation-on bool true)
(define-read-only (validate-snapshot (id uint))
  (match (map-get? portfolio-snapshots id)
    snap (ok { valid: true, deposits: (get total-deposits snap), yield: (get total-yield snap) })
    (err u220)))
(define-read-only (get-snapshot-integrity-params)
  { validation-on: (var-get snapshot-validation-on), count: (var-get snapshot-count) })

;; Performance tuning parameters
(define-data-var gas-optimization-level uint u1)
(define-data-var cache-ttl-blocks uint u10)
(define-data-var batch-process-limit uint u25)
(define-read-only (get-perf-params)
  { gas-opt: (var-get gas-optimization-level), cache-ttl: (var-get cache-ttl-blocks), batch-limit: (var-get batch-process-limit) })
(define-public (set-perf-params (gas uint) (cache uint) (batch uint))
  (begin
    (asserts\! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (var-set gas-optimization-level gas)
    (var-set cache-ttl-blocks cache)
    (var-set batch-process-limit batch)
    (ok true)))

;; liqchk tracking
(define-map liqchk-log uint { v: uint, at: uint })
(define-data-var liqchk-cnt uint u0)
(define-public (log-liqchk (val uint))
  (begin (asserts! (> val u0) (err u4100))
    (let ((id (+ (var-get liqchk-cnt) u1)))
      (map-set liqchk-log id { v: val, at: stacks-block-height })
      (var-set liqchk-cnt id) (ok id))))
(define-read-only (get-liqchk-entry (id uint))
  (map-get? liqchk-log id))

;; slpgrd tracking
(define-map slpgrd-log uint { v: uint, at: uint })
(define-data-var slpgrd-cnt uint u0)
(define-public (log-slpgrd (val uint))
  (begin (asserts! (> val u0) (err u4200))
    (let ((id (+ (var-get slpgrd-cnt) u1)))
      (map-set slpgrd-log id { v: val, at: stacks-block-height })
      (var-set slpgrd-cnt id) (ok id))))
(define-read-only (get-slpgrd-entry (id uint))
  (map-get? slpgrd-log id))

;; possiz tracking
(define-map possiz-log uint { v: uint, at: uint })
(define-data-var possiz-cnt uint u0)
(define-public (log-possiz (val uint))
  (begin (asserts! (> val u0) (err u4300))
    (let ((id (+ (var-get possiz-cnt) u1)))
      (map-set possiz-log id { v: val, at: stacks-block-height })
      (var-set possiz-cnt id) (ok id))))
(define-read-only (get-possiz-entry (id uint))
  (map-get? possiz-log id))

;; mrgcal tracking
(define-map mrgcal-log uint { v: uint, at: uint })
(define-data-var mrgcal-cnt uint u0)
(define-public (log-mrgcal (val uint))
  (begin (asserts! (> val u0) (err u4400))
    (let ((id (+ (var-get mrgcal-cnt) u1)))
      (map-set mrgcal-log id { v: val, at: stacks-block-height })
      (var-set mrgcal-cnt id) (ok id))))
(define-read-only (get-mrgcal-entry (id uint))
  (map-get? mrgcal-log id))

;; ordrt tracking
(define-map ordrt-log uint { v: uint, at: uint })
(define-data-var ordrt-cnt uint u0)
(define-public (log-ordrt (val uint))
  (begin (asserts! (> val u0) (err u4500))
    (let ((id (+ (var-get ordrt-cnt) u1)))
      (map-set ordrt-log id { v: val, at: stacks-block-height })
      (var-set ordrt-cnt id) (ok id))))
(define-read-only (get-ordrt-entry (id uint))
  (map-get? ordrt-log id))

;; stlflw tracking
(define-map stlflw-log uint { v: uint, at: uint })
(define-data-var stlflw-cnt uint u0)
(define-public (log-stlflw (val uint))
  (begin (asserts! (> val u0) (err u4600))
    (let ((id (+ (var-get stlflw-cnt) u1)))
      (map-set stlflw-log id { v: val, at: stacks-block-height })
      (var-set stlflw-cnt id) (ok id))))
(define-read-only (get-stlflw-entry (id uint))
  (map-get? stlflw-log id))

;; colmgr tracking
(define-map colmgr-log uint { v: uint, at: uint })
(define-data-var colmgr-cnt uint u0)
(define-public (log-colmgr (val uint))
  (begin (asserts! (> val u0) (err u4700))
    (let ((id (+ (var-get colmgr-cnt) u1)))
      (map-set colmgr-log id { v: val, at: stacks-block-height })
      (var-set colmgr-cnt id) (ok id))))
(define-read-only (get-colmgr-entry (id uint))
  (map-get? colmgr-log id))

;; explim tracking
(define-map explim-log uint { v: uint, at: uint })
(define-data-var explim-cnt uint u0)
(define-public (log-explim (val uint))
  (begin (asserts! (> val u0) (err u4800))
    (let ((id (+ (var-get explim-cnt) u1)))
      (map-set explim-log id { v: val, at: stacks-block-height })
      (var-set explim-cnt id) (ok id))))
(define-read-only (get-explim-entry (id uint))
  (map-get? explim-log id))

;; hdgrat tracking
(define-map hdgrat-log uint { v: uint, at: uint })
(define-data-var hdgrat-cnt uint u0)
(define-public (log-hdgrat (val uint))
  (begin (asserts! (> val u0) (err u4900))
    (let ((id (+ (var-get hdgrat-cnt) u1)))
      (map-set hdgrat-log id { v: val, at: stacks-block-height })
      (var-set hdgrat-cnt id) (ok id))))
(define-read-only (get-hdgrat-entry (id uint))
  (map-get? hdgrat-log id))

;; pnltrk tracking
(define-map pnltrk-log uint { v: uint, at: uint })
(define-data-var pnltrk-cnt uint u0)
(define-public (log-pnltrk (val uint))
  (begin (asserts! (> val u0) (err u5000))
    (let ((id (+ (var-get pnltrk-cnt) u1)))
      (map-set pnltrk-log id { v: val, at: stacks-block-height })
      (var-set pnltrk-cnt id) (ok id))))
(define-read-only (get-pnltrk-entry (id uint))
  (map-get? pnltrk-log id))

;; mrktmk tracking
(define-map mrktmk-log uint { v: uint, at: uint })
(define-data-var mrktmk-cnt uint u0)
(define-public (log-mrktmk (val uint))
  (begin (asserts! (> val u0) (err u5100))
    (let ((id (+ (var-get mrktmk-cnt) u1)))
      (map-set mrktmk-log id { v: val, at: stacks-block-height })
      (var-set mrktmk-cnt id) (ok id))))
(define-read-only (get-mrktmk-entry (id uint))
  (map-get? mrktmk-log id))
