;; title: yield-aggregator
;; version: 1.0.0
;; summary: Institutional sBTC Yield Aggregator with Clarity 3
;; description: Core yield optimization platform for institutional users with enhanced sBTC yield generation

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

;; token definitions
;;

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
    
    ;; Transfer tokens from user to contract
    (match (contract-call? token transfer amount tx-sender (as-contract tx-sender) none)
      success (begin
        ;; Update user deposit
        (map-set user-deposits tx-sender (+ current-user-deposit amount))
        ;; Update total deposits
        (var-set total-deposits (+ (var-get total-deposits) amount))
        ;; Record deposit history
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
    (user-deposit (default-to u0 (map-get? user-deposits tx-sender)))
    (user-yield (default-to u0 (map-get? user-yield-earned tx-sender)))
    (total-available (+ user-deposit user-yield))
    (contract-balance (unwrap-panic (as-contract (contract-call? token get-balance tx-sender))))
  )
    (asserts! (var-get contract-initialized) ERR_NOT_INITIALIZED)
    (asserts! (> amount u0) ERR_INVALID_AMOUNT)
    (asserts! (<= amount total-available) ERR_INSUFFICIENT_BALANCE)
    (asserts! (<= amount contract-balance) ERR_INSUFFICIENT_BALANCE)
    
    ;; Transfer tokens from contract to user
    (match (as-contract (contract-call? token transfer amount tx-sender tx-sender none))
      success (begin
        ;; Update user balances
        (if (<= amount user-deposit)
          ;; Withdrawing only from deposit
          (map-set user-deposits tx-sender (- user-deposit amount))
          ;; Withdrawing from deposit and yield
          (begin
            (map-set user-deposits tx-sender u0)
            (map-set user-yield-earned tx-sender (- total-available amount))
          )
        )
        ;; Update total deposits
        (var-set total-deposits (- (var-get total-deposits) (if (<= amount user-deposit) amount user-deposit)))
        (print {event: "withdrawal", user: tx-sender, amount: amount})
        (ok true)
      )
      error ERR_WITHDRAWAL_FAILED
    )
  )
)

;; Calculate and distribute yield (only contract owner)
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
