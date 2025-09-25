;; title: mock-sbtc
;; version: 1.0.0
;; summary: Mock sBTC token for testing
;; description: SIP-010 compliant mock token for testing Aureus Protocol

;; traits
(impl-trait .yield-aggregator.sip-010-trait)

;; token definitions
(define-fungible-token mock-sbtc)

;; constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_OWNER_ONLY (err u100))
(define-constant ERR_NOT_TOKEN_OWNER (err u101))

;; data vars
(define-data-var token-name (string-ascii 32) "Mock sBTC")
(define-data-var token-symbol (string-ascii 10) "MSBTC")
(define-data-var token-uri (optional (string-utf8 256)) none)
(define-data-var token-decimals uint u8)

;; data maps
;;

;; public functions

;; SIP-010 Standard Functions
(define-public (transfer (amount uint) (from principal) (to principal) (memo (optional (buff 34))))
    (begin
        (asserts! (or (is-eq from tx-sender) (is-eq from contract-caller)) ERR_NOT_TOKEN_OWNER)
        (ft-transfer? mock-sbtc amount from to)
    )
)

(define-public (mint (amount uint) (to principal))
    (begin
        (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_OWNER_ONLY)
        (ft-mint? mock-sbtc amount to)
    )
)

;; read only functions
(define-read-only (get-name)
    (ok (var-get token-name))
)

(define-read-only (get-symbol)
    (ok (var-get token-symbol))
)

(define-read-only (get-decimals)
    (ok (var-get token-decimals))
)

(define-read-only (get-balance (who principal))
    (ok (ft-get-balance mock-sbtc who))
)

(define-read-only (get-total-supply)
    (ok (ft-get-supply mock-sbtc))
)

(define-read-only (get-token-uri)
    (ok (var-get token-uri))
)

;; private functions
;;

