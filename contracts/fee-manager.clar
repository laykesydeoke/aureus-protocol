;; fee-manager.clar
;; Protocol fee collection and distribution for Aureus Protocol
;; Manages withdrawal fees, performance fees, and fee distribution to treasury

;; Constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_UNAUTHORIZED (err u300))
(define-constant ERR_INVALID_FEE (err u301))
(define-constant ERR_INVALID_RECIPIENT (err u302))
(define-constant ERR_NO_FEES (err u303))
(define-constant ERR_TRANSFER_FAILED (err u304))

;; Maximum fees in basis points
(define-constant MAX_WITHDRAWAL_FEE u500)   ;; 5% max
(define-constant MAX_PERFORMANCE_FEE u2000) ;; 20% max

;; Data vars
(define-data-var withdrawal-fee-rate uint u50)   ;; 0.5% default
(define-data-var performance-fee-rate uint u1000) ;; 10% default
(define-data-var treasury-address principal CONTRACT_OWNER)
(define-data-var total-fees-collected uint u0)
(define-data-var total-fees-distributed uint u0)

;; Fee records per user
(define-map user-fees-paid
    { user: principal }
    { withdrawal-fees: uint, performance-fees: uint }
)

;; ============================================================
;; Fee Calculation (Read-only)
;; ============================================================

(define-read-only (calculate-withdrawal-fee (amount uint))
    (/ (* amount (var-get withdrawal-fee-rate)) u10000)
)

(define-read-only (calculate-performance-fee (yield-amount uint))
    (/ (* yield-amount (var-get performance-fee-rate)) u10000)
)

(define-read-only (get-net-withdrawal (amount uint))
    (let ((fee (calculate-withdrawal-fee amount)))
        { net-amount: (- amount fee), fee: fee }
    )
)

(define-read-only (get-net-yield (yield-amount uint))
    (let ((fee (calculate-performance-fee yield-amount)))
        { net-yield: (- yield-amount fee), fee: fee }
    )
)

;; ============================================================
;; Fee Collection
;; ============================================================

;; Record a withdrawal fee (called by yield-aggregator)
(define-public (collect-withdrawal-fee (user principal) (amount uint))
    (let (
        (fee (calculate-withdrawal-fee amount))
        (user-record (default-to { withdrawal-fees: u0, performance-fees: u0 }
            (map-get? user-fees-paid { user: user })))
    )
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
        (asserts! (> fee u0) ERR_NO_FEES)

        (map-set user-fees-paid
            { user: user }
            (merge user-record { withdrawal-fees: (+ (get withdrawal-fees user-record) fee) })
        )
        (var-set total-fees-collected (+ (var-get total-fees-collected) fee))
        (print { event: "withdrawal-fee", user: user, fee: fee, amount: amount })
        (ok fee)
    )
)

;; Record a performance fee on yield
(define-public (collect-performance-fee (user principal) (yield-amount uint))
    (let (
        (fee (calculate-performance-fee yield-amount))
        (user-record (default-to { withdrawal-fees: u0, performance-fees: u0 }
            (map-get? user-fees-paid { user: user })))
    )
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
        (asserts! (> fee u0) ERR_NO_FEES)

        (map-set user-fees-paid
            { user: user }
            (merge user-record { performance-fees: (+ (get performance-fees user-record) fee) })
        )
        (var-set total-fees-collected (+ (var-get total-fees-collected) fee))
        (print { event: "performance-fee", user: user, fee: fee, yield-amount: yield-amount })
        (ok fee)
    )
)

;; ============================================================
;; Admin Functions
;; ============================================================

;; Set withdrawal fee rate (in basis points, max 5%)
(define-public (set-withdrawal-fee (new-rate uint))
    (begin
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
        (asserts! (<= new-rate MAX_WITHDRAWAL_FEE) ERR_INVALID_FEE)
        (var-set withdrawal-fee-rate new-rate)
        (print { event: "set-withdrawal-fee", rate: new-rate })
        (ok true)
    )
)

;; Set performance fee rate (in basis points, max 20%)
(define-public (set-performance-fee (new-rate uint))
    (begin
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
        (asserts! (<= new-rate MAX_PERFORMANCE_FEE) ERR_INVALID_FEE)
        (var-set performance-fee-rate new-rate)
        (print { event: "set-performance-fee", rate: new-rate })
        (ok true)
    )
)

;; Update treasury address
(define-public (set-treasury (new-treasury principal))
    (begin
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
        (asserts! (is-standard new-treasury) ERR_INVALID_RECIPIENT)
        (asserts! (not (is-eq new-treasury CONTRACT_OWNER)) ERR_INVALID_RECIPIENT)
        (var-set treasury-address new-treasury)
        (print { event: "set-treasury", address: new-treasury })
        (ok true)
    )
)

;; ============================================================
;; Read-Only Functions
;; ============================================================

(define-read-only (get-withdrawal-fee-rate)
    (var-get withdrawal-fee-rate)
)

(define-read-only (get-performance-fee-rate)
    (var-get performance-fee-rate)
)

(define-read-only (get-treasury)
    (var-get treasury-address)
)

(define-read-only (get-total-fees-collected)
    (var-get total-fees-collected)
)

(define-read-only (get-total-fees-distributed)
    (var-get total-fees-distributed)
)

(define-read-only (get-user-fees (user principal))
    (default-to { withdrawal-fees: u0, performance-fees: u0 }
        (map-get? user-fees-paid { user: user }))
)

(define-read-only (get-fee-summary)
    {
        withdrawal-rate: (var-get withdrawal-fee-rate),
        performance-rate: (var-get performance-fee-rate),
        total-collected: (var-get total-fees-collected),
        total-distributed: (var-get total-fees-distributed),
        treasury: (var-get treasury-address)
    }
)
