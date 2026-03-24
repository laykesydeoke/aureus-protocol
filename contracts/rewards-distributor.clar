;; title: rewards-distributor
;; version: 1.0.0
;; summary: Periodic Reward Distribution Contract for Aureus Protocol
;; description: Manages epoch-based reward distribution to sBTC depositors

;; traits
(use-trait sip-010-trait .sip010-trait.sip-010-trait)

;; constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_UNAUTHORIZED (err u300))
(define-constant ERR_ALREADY_INITIALIZED (err u301))
(define-constant ERR_EPOCH_NOT_FOUND (err u302))
(define-constant ERR_EPOCH_STILL_ACTIVE (err u303))
(define-constant ERR_ALREADY_CLAIMED (err u304))
(define-constant ERR_NOTHING_TO_CLAIM (err u305))
(define-constant ERR_INVALID_EPOCH (err u306))
(define-constant ERR_INVALID_AMOUNT (err u307))
(define-constant ERR_ZERO_DEPOSITS (err u308))

;; data vars
(define-data-var epoch-counter uint u0)
(define-data-var current-epoch-start uint u0)
(define-data-var distributor-initialized bool false)

;; Reward epoch map: {epoch-id} -> {total-rewards, distributed, start-block, end-block}
(define-map reward-epoch
  { epoch-id: uint }
  {
    total-rewards: uint,
    distributed: bool,
    start-block: uint,
    end-block: uint,
    total-deposits-snapshot: uint
  }
)

;; User claims per epoch: {epoch-id, user} -> {claimed, amount}
(define-map user-claims
  { epoch-id: uint, user: principal }
  {
    claimed: bool,
    amount: uint
  }
)

;; Track user deposit snapshot at epoch creation (for proportional calculation)
(define-map epoch-user-deposits
  { epoch-id: uint, user: principal }
  uint
)

;; public functions

;; Initialize the rewards distributor (owner only)
(define-public (initialize)
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (not (var-get distributor-initialized)) ERR_ALREADY_INITIALIZED)
    (var-set distributor-initialized true)
    (var-set current-epoch-start stacks-block-height)
    (print {event: "rewards-distributor-initialized", by: tx-sender, block: stacks-block-height})
    (ok true)
  )
)

;; Start a new reward epoch (owner only)
;; Records total-rewards for the epoch and snapshots total deposits from yield-aggregator
(define-public (start-new-epoch (total-rewards uint) (epoch-length uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (var-get distributor-initialized) ERR_ALREADY_INITIALIZED)
    (asserts! (> total-rewards u0) ERR_INVALID_AMOUNT)
    (asserts! (> epoch-length u0) ERR_INVALID_EPOCH)

    (let (
      (new-epoch-id (+ (var-get epoch-counter) u1))
      (epoch-start stacks-block-height)
      (epoch-end (+ stacks-block-height epoch-length))
      ;; Read total deposits from yield-aggregator for snapshot
      (total-deposits-snap (unwrap-panic (contract-call? .yield-aggregator get-total-deposits)))
    )
      (asserts! (> total-deposits-snap u0) ERR_ZERO_DEPOSITS)

      (map-set reward-epoch { epoch-id: new-epoch-id }
        {
          total-rewards: total-rewards,
          distributed: false,
          start-block: epoch-start,
          end-block: epoch-end,
          total-deposits-snapshot: total-deposits-snap
        }
      )
      (var-set epoch-counter new-epoch-id)
      (var-set current-epoch-start epoch-start)
      (print {event: "epoch-started", epoch-id: new-epoch-id, total-rewards: total-rewards,
              start-block: epoch-start, end-block: epoch-end, total-deposits: total-deposits-snap})
      (ok new-epoch-id)
    )
  )
)

;; Mark an epoch as fully distributed (owner only)
(define-public (mark-epoch-distributed (epoch-id uint))
  (let (
    (epoch (unwrap! (map-get? reward-epoch { epoch-id: epoch-id }) ERR_EPOCH_NOT_FOUND))
  )
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (not (get distributed epoch)) ERR_EPOCH_STILL_ACTIVE)
    (asserts! (>= stacks-block-height (get end-block epoch)) ERR_EPOCH_STILL_ACTIVE)

    (map-set reward-epoch { epoch-id: epoch-id }
      (merge epoch { distributed: true })
    )
    (print {event: "epoch-distributed", epoch-id: epoch-id})
    (ok true)
  )
)

;; Record a user's deposit snapshot for a specific epoch (owner only)
;; Should be called before start-new-epoch completes to record each user's share
(define-public (record-user-epoch-deposit (epoch-id uint) (user principal) (deposit-amount uint))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (is-some (map-get? reward-epoch { epoch-id: epoch-id })) ERR_EPOCH_NOT_FOUND)
    (map-set epoch-user-deposits { epoch-id: epoch-id, user: user } deposit-amount)
    (ok true)
  )
)
