;; title: sip010-trait
;; version: 1.0.0
;; summary: SIP-010 Fungible Token Standard Trait
;; description: Standard trait definition for SIP-010 compliant fungible tokens on Stacks

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
