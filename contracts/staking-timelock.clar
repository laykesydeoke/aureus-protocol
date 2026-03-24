;; staking-timelock.clar
;; Fixed-term staking with bonus yield for locking sBTC
;; Users lock tokens for a chosen duration and receive higher yield rates

(use-trait sip-010-trait .sip010-trait.sip-010-trait)

;; Constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_UNAUTHORIZED (err u200))
(define-constant ERR_INVALID_AMOUNT (err u201))
(define-constant ERR_INVALID_DURATION (err u202))
(define-constant ERR_LOCK_NOT_FOUND (err u203))
(define-constant ERR_LOCK_ACTIVE (err u204))
(define-constant ERR_LOCK_EXPIRED (err u205))
(define-constant ERR_TRANSFER_FAILED (err u206))
(define-constant ERR_ALREADY_CLAIMED (err u207))
(define-constant ERR_NOT_EXPIRED (err u208))
(define-constant ERR_PAUSED (err u209))

;; Lock duration tiers (in blocks, ~10 min/block)
(define-constant DURATION_30_DAYS u4320)
(define-constant DURATION_90_DAYS u12960)
(define-constant DURATION_180_DAYS u25920)
(define-constant DURATION_365_DAYS u52560)

;; Bonus yield rates in basis points (100 = 1%)
(define-constant BONUS_30_DAYS u50)    ;; 0.5% bonus
(define-constant BONUS_90_DAYS u150)   ;; 1.5% bonus
(define-constant BONUS_180_DAYS u300)  ;; 3.0% bonus
(define-constant BONUS_365_DAYS u600)  ;; 6.0% bonus

;; Data vars
(define-data-var lock-counter uint u0)
(define-data-var total-locked uint u0)
(define-data-var min-lock-amount uint u1000000) ;; 0.01 sBTC
(define-data-var emergency-pause bool false)

;; Maps
(define-map stake-locks
    { lock-id: uint }
    {
        owner: principal,
        amount: uint,
        lock-start: uint,
        lock-end: uint,
        duration-tier: uint,
        bonus-rate: uint,
        claimed: bool
    }
)

;; Track total locks per user
(define-map user-lock-count
    { user: principal }
    { count: uint, total-staked: uint }
)

;; ============================================================
;; Public Functions
;; ============================================================

;; Create a new staking lock
(define-public (create-lock (amount uint) (duration uint) (token <sip-010-trait>))
    (let (
        (lock-id (+ (var-get lock-counter) u1))
        (bonus (get-bonus-for-duration duration))
        (user-balance (unwrap-panic (contract-call? token get-balance tx-sender)))
        (user-locks (default-to { count: u0, total-staked: u0 }
            (map-get? user-lock-count { user: tx-sender })))
    )
        (asserts! (not (var-get emergency-pause)) ERR_PAUSED)
        (asserts! (>= amount (var-get min-lock-amount)) ERR_INVALID_AMOUNT)
        (asserts! (>= user-balance amount) ERR_INVALID_AMOUNT)
        (asserts! (> bonus u0) ERR_INVALID_DURATION)

        ;; Transfer tokens from user to contract vault
        (match (contract-call? token transfer amount tx-sender (as-contract tx-sender) none)
            success (begin
                (map-set stake-locks
                    { lock-id: lock-id }
                    {
                        owner: tx-sender,
                        amount: amount,
                        lock-start: stacks-block-height,
                        lock-end: (+ stacks-block-height duration),
                        duration-tier: duration,
                        bonus-rate: bonus,
                        claimed: false
                    }
                )
                (map-set user-lock-count
                    { user: tx-sender }
                    {
                        count: (+ (get count user-locks) u1),
                        total-staked: (+ (get total-staked user-locks) amount)
                    }
                )
                (var-set lock-counter lock-id)
                (var-set total-locked (+ (var-get total-locked) amount))
                (print { event: "create-lock", lock-id: lock-id, owner: tx-sender,
                         amount: amount, duration: duration, bonus-rate: bonus })
                (ok lock-id)
            )
            error ERR_TRANSFER_FAILED
        )
    )
)

;; Claim expired lock (withdraw principal + bonus)
(define-public (claim-lock (lock-id uint) (token <sip-010-trait>))
    (let (
        (lock (unwrap! (map-get? stake-locks { lock-id: lock-id }) ERR_LOCK_NOT_FOUND))
    )
        (asserts! (is-eq tx-sender (get owner lock)) ERR_UNAUTHORIZED)
        (asserts! (not (get claimed lock)) ERR_ALREADY_CLAIMED)
        (asserts! (>= stacks-block-height (get lock-end lock)) ERR_NOT_EXPIRED)

        (let (
            (bonus-amount (/ (* (get amount lock) (get bonus-rate lock)) u10000))
            (total-payout (+ (get amount lock) bonus-amount))
            (user-locks (default-to { count: u0, total-staked: u0 }
                (map-get? user-lock-count { user: tx-sender })))
        )
            ;; Transfer principal + bonus back to user
            (match (as-contract (contract-call? token transfer total-payout tx-sender (get owner lock) none))
                success (begin
                    (map-set stake-locks
                        { lock-id: lock-id }
                        (merge lock { claimed: true })
                    )
                    (map-set user-lock-count
                        { user: tx-sender }
                        {
                            count: (if (> (get count user-locks) u0)
                                (- (get count user-locks) u1)
                                u0),
                            total-staked: (if (>= (get total-staked user-locks) (get amount lock))
                                (- (get total-staked user-locks) (get amount lock))
                                u0)
                        }
                    )
                    (var-set total-locked
                        (if (>= (var-get total-locked) (get amount lock))
                            (- (var-get total-locked) (get amount lock))
                            u0))
                    (print { event: "claim-lock", lock-id: lock-id, owner: tx-sender,
                             principal-returned: (get amount lock), bonus-earned: bonus-amount })
                    (ok total-payout)
                )
                error ERR_TRANSFER_FAILED
            )
        )
    )
)

;; Emergency withdrawal (forfeits bonus, only returns principal)
(define-public (emergency-withdraw (lock-id uint) (token <sip-010-trait>))
    (let (
        (lock (unwrap! (map-get? stake-locks { lock-id: lock-id }) ERR_LOCK_NOT_FOUND))
    )
        (asserts! (is-eq tx-sender (get owner lock)) ERR_UNAUTHORIZED)
        (asserts! (not (get claimed lock)) ERR_ALREADY_CLAIMED)

        (let (
            (user-locks (default-to { count: u0, total-staked: u0 }
                (map-get? user-lock-count { user: tx-sender })))
        )
            ;; Only return principal, no bonus
            (match (as-contract (contract-call? token transfer (get amount lock) tx-sender (get owner lock) none))
                success (begin
                    (map-set stake-locks
                        { lock-id: lock-id }
                        (merge lock { claimed: true })
                    )
                    (map-set user-lock-count
                        { user: tx-sender }
                        {
                            count: (if (> (get count user-locks) u0)
                                (- (get count user-locks) u1)
                                u0),
                            total-staked: (if (>= (get total-staked user-locks) (get amount lock))
                                (- (get total-staked user-locks) (get amount lock))
                                u0)
                        }
                    )
                    (var-set total-locked
                        (if (>= (var-get total-locked) (get amount lock))
                            (- (var-get total-locked) (get amount lock))
                            u0))
                    (print { event: "emergency-withdraw", lock-id: lock-id,
                             owner: tx-sender, amount: (get amount lock), bonus-forfeited: true })
                    (ok (get amount lock))
                )
                error ERR_TRANSFER_FAILED
            )
        )
    )
)

;; Admin: set minimum lock amount
(define-public (set-min-lock-amount (new-min uint))
    (begin
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
        (asserts! (> new-min u0) ERR_INVALID_AMOUNT)
        (var-set min-lock-amount new-min)
        (ok true)
    )
)

;; Admin: toggle emergency pause
(define-public (set-pause (paused bool))
    (begin
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
        (var-set emergency-pause paused)
        (print { event: "pause-toggle", paused: paused })
        (ok true)
    )
)

;; ============================================================
;; Read-Only Functions
;; ============================================================

(define-read-only (get-lock (lock-id uint))
    (map-get? stake-locks { lock-id: lock-id })
)

(define-read-only (get-user-locks (user principal))
    (default-to { count: u0, total-staked: u0 }
        (map-get? user-lock-count { user: user }))
)

(define-read-only (get-total-locked)
    (var-get total-locked)
)

(define-read-only (get-lock-count)
    (var-get lock-counter)
)

(define-read-only (get-min-lock-amount)
    (var-get min-lock-amount)
)

(define-read-only (is-lock-expired (lock-id uint))
    (match (map-get? stake-locks { lock-id: lock-id })
        lock (>= stacks-block-height (get lock-end lock))
        false
    )
)

(define-read-only (get-lock-bonus (lock-id uint))
    (match (map-get? stake-locks { lock-id: lock-id })
        lock (/ (* (get amount lock) (get bonus-rate lock)) u10000)
        u0
    )
)

(define-read-only (get-lock-time-remaining (lock-id uint))
    (match (map-get? stake-locks { lock-id: lock-id })
        lock (if (> (get lock-end lock) stacks-block-height)
            (- (get lock-end lock) stacks-block-height)
            u0)
        u0
    )
)

;; ============================================================
;; Private Functions
;; ============================================================

;; Get bonus rate for a given duration
(define-private (get-bonus-for-duration (duration uint))
    (if (is-eq duration DURATION_365_DAYS)
        BONUS_365_DAYS
        (if (is-eq duration DURATION_180_DAYS)
            BONUS_180_DAYS
            (if (is-eq duration DURATION_90_DAYS)
                BONUS_90_DAYS
                (if (is-eq duration DURATION_30_DAYS)
                    BONUS_30_DAYS
                    u0))))
)
