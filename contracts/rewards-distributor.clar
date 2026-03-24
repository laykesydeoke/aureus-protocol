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
