;; title: protocol-adapter
;; version: 1.0.0
;; summary: Multi-Protocol Integration Adapter for Aureus Protocol
;; description: Enhanced protocol integration layer supporting multiple DeFi protocols with Clarity 3 optimizations

;; traits
(define-trait protocol-trait
  (
    (get-yield-rate () (response uint uint))
    (deposit (uint principal) (response bool uint))
    (withdraw (uint principal) (response bool uint))
    (get-protocol-name () (response (string-ascii 32) uint))
  )
)

;; token definitions
;;

;; constants
(define-constant CONTRACT_OWNER tx-sender)
(define-constant ERR_UNAUTHORIZED (err u200))
(define-constant ERR_PROTOCOL_NOT_FOUND (err u201))
(define-constant ERR_PROTOCOL_ALREADY_EXISTS (err u202))
(define-constant ERR_INVALID_PROTOCOL (err u203))
(define-constant ERR_DEPOSIT_FAILED (err u204))
(define-constant ERR_WITHDRAWAL_FAILED (err u205))
(define-constant ERR_INSUFFICIENT_LIQUIDITY (err u206))
(define-constant ERR_PROTOCOL_PAUSED (err u207))

;; Protocol identifiers
(define-constant PROTOCOL_ZEST u1)
(define-constant PROTOCOL_VELAR u2)
(define-constant PROTOCOL_ALEX u3)
(define-constant PROTOCOL_STACKINGDAO u4)

;; data vars
(define-data-var active-protocol uint PROTOCOL_ZEST)
(define-data-var total-protocols uint u4)
(define-data-var adapter-paused bool false)
(define-data-var rebalancing-threshold uint u500) ;; 5% threshold

;; data maps
(define-map protocol-info uint {
  name: (string-ascii 32),
  yield-rate: uint,
  total-deposited: uint,
  is-active: bool,
  last-updated: uint
})

(define-map protocol-balances {protocol-id: uint, token: principal} uint)
(define-map user-protocol-allocations {user: principal, protocol-id: uint} uint)

;; public functions

;; Initialize protocol adapter with default protocols
(define-public (initialize-adapter)
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    
    ;; Initialize default protocols
    (map-set protocol-info PROTOCOL_ZEST {
      name: "Zest Protocol",
      yield-rate: u800, ;; 8% APY
      total-deposited: u0,
      is-active: true,
      last-updated: stacks-block-height
    })
    
    (map-set protocol-info PROTOCOL_VELAR {
      name: "Velar Protocol", 
      yield-rate: u650, ;; 6.5% APY
      total-deposited: u0,
      is-active: true,
      last-updated: stacks-block-height
    })
    
    (map-set protocol-info PROTOCOL_ALEX {
      name: "ALEX Protocol",
      yield-rate: u720, ;; 7.2% APY
      total-deposited: u0,
      is-active: true,
      last-updated: stacks-block-height
    })
    
    (map-set protocol-info PROTOCOL_STACKINGDAO {
      name: "StackingDAO",
      yield-rate: u580, ;; 5.8% APY
      total-deposited: u0,
      is-active: true,
      last-updated: stacks-block-height
    })
    
    (print {event: "adapter-initialized", protocols: u4})
    (ok true)
  )
)

;; Deposit tokens to best yielding protocol
(define-public (deposit-to-optimal (amount uint) (token principal))
  (let (
    (optimal-protocol (unwrap-panic (get-optimal-protocol)))
    (protocol-details (unwrap-panic (map-get? protocol-info optimal-protocol)))
  )
    (asserts! (not (var-get adapter-paused)) ERR_PROTOCOL_PAUSED)
    (asserts! (> amount u0) ERR_INVALID_PROTOCOL)
    (asserts! (get is-active protocol-details) ERR_INVALID_PROTOCOL)
    
    ;; Simulate deposit to protocol (in real implementation, call actual protocol)
    (let (
      (current-balance (default-to u0 (map-get? protocol-balances {protocol-id: optimal-protocol, token: token})))
      (new-balance (+ current-balance amount))
    )
      ;; Update protocol balance
      (map-set protocol-balances {protocol-id: optimal-protocol, token: token} new-balance)
      
      ;; Update protocol info
      (map-set protocol-info optimal-protocol
        (merge protocol-details {
          total-deposited: (+ (get total-deposited protocol-details) amount),
          last-updated: stacks-block-height
        })
      )
      
      ;; Track user allocation
      (let ((current-user-allocation (default-to u0 (map-get? user-protocol-allocations {user: tx-sender, protocol-id: optimal-protocol}))))
        (map-set user-protocol-allocations 
          {user: tx-sender, protocol-id: optimal-protocol}
          (+ current-user-allocation amount))
      )
      
      (print {event: "deposit-to-protocol", protocol: optimal-protocol, amount: amount, user: tx-sender})
      (ok optimal-protocol)
    )
  )
)

;; Withdraw tokens from specified protocol
(define-public (withdraw-from-protocol (protocol-id uint) (amount uint) (token principal))
  (let (
    (protocol-details (unwrap! (map-get? protocol-info protocol-id) ERR_PROTOCOL_NOT_FOUND))
    (current-balance (default-to u0 (map-get? protocol-balances {protocol-id: protocol-id, token: token})))
    (user-allocation (default-to u0 (map-get? user-protocol-allocations {user: tx-sender, protocol-id: protocol-id})))
  )
    (asserts! (> amount u0) ERR_INVALID_PROTOCOL)
    (asserts! (<= amount user-allocation) ERR_INSUFFICIENT_LIQUIDITY)
    (asserts! (<= amount current-balance) ERR_INSUFFICIENT_LIQUIDITY)
    
    ;; Update balances
    (map-set protocol-balances {protocol-id: protocol-id, token: token} (- current-balance amount))
    (map-set user-protocol-allocations 
      {user: tx-sender, protocol-id: protocol-id}
      (- user-allocation amount))
    
    ;; Update protocol info
    (map-set protocol-info protocol-id
      (merge protocol-details {
        total-deposited: (- (get total-deposited protocol-details) amount),
        last-updated: stacks-block-height
      })
    )
    
    (print {event: "withdraw-from-protocol", protocol: protocol-id, amount: amount, user: tx-sender})
    (ok true)
  )
)

;; Rebalance between protocols for optimal yield
(define-public (rebalance-protocols (token principal))
  (let (
    (current-protocol (var-get active-protocol))
    (optimal-protocol (unwrap-panic (get-optimal-protocol)))
  )
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (asserts! (not (var-get adapter-paused)) ERR_PROTOCOL_PAUSED)
    
    (if (not (is-eq current-protocol optimal-protocol))
      (begin
        (var-set active-protocol optimal-protocol)
        (print {event: "protocol-rebalanced", from: current-protocol, to: optimal-protocol})
        (ok true)
      )
      (ok false) ;; No rebalancing needed
    )
  )
)

;; Update protocol yield rate (owner only)
(define-public (update-protocol-rate (protocol-id uint) (new-rate uint))
  (let (
    (protocol-details (unwrap! (map-get? protocol-info protocol-id) ERR_PROTOCOL_NOT_FOUND))
  )
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    
    (map-set protocol-info protocol-id
      (merge protocol-details {
        yield-rate: new-rate,
        last-updated: stacks-block-height
      })
    )
    
    (print {event: "protocol-rate-updated", protocol: protocol-id, new-rate: new-rate})
    (ok true)
  )
)

;; Emergency pause adapter (owner only)
(define-public (set-adapter-pause (pause bool))
  (begin
    (asserts! (is-eq tx-sender CONTRACT_OWNER) ERR_UNAUTHORIZED)
    (var-set adapter-paused pause)
    (print {event: "adapter-pause", status: pause})
    (ok true)
  )
)

;; read only functions

;; Get optimal protocol based on highest yield rate
(define-read-only (get-optimal-protocol)
  (let (
    (zest-info (unwrap-panic (map-get? protocol-info PROTOCOL_ZEST)))
    (velar-info (unwrap-panic (map-get? protocol-info PROTOCOL_VELAR)))
    (alex-info (unwrap-panic (map-get? protocol-info PROTOCOL_ALEX)))
    (stacking-info (unwrap-panic (map-get? protocol-info PROTOCOL_STACKINGDAO)))
  )
    (let (
      (best-rate (fold max (list 
        (get yield-rate zest-info)
        (get yield-rate velar-info) 
        (get yield-rate alex-info)
        (get yield-rate stacking-info)
      ) u0))
    )
      (if (and (is-eq best-rate (get yield-rate zest-info)) (get is-active zest-info))
        (ok PROTOCOL_ZEST)
        (if (and (is-eq best-rate (get yield-rate velar-info)) (get is-active velar-info))
          (ok PROTOCOL_VELAR)
          (if (and (is-eq best-rate (get yield-rate alex-info)) (get is-active alex-info))
            (ok PROTOCOL_ALEX)
            (if (and (is-eq best-rate (get yield-rate stacking-info)) (get is-active stacking-info))
              (ok PROTOCOL_STACKINGDAO)
              (ok PROTOCOL_ZEST) ;; Default fallback
            )
          )
        )
      )
    )
  )
)

;; Get protocol information
(define-read-only (get-protocol-info (protocol-id uint))
  (ok (map-get? protocol-info protocol-id))
)

;; Get protocol balance for specific token
(define-read-only (get-protocol-balance (protocol-id uint) (token principal))
  (ok (default-to u0 (map-get? protocol-balances {protocol-id: protocol-id, token: token})))
)

;; Get user allocation in protocol
(define-read-only (get-user-allocation (user principal) (protocol-id uint))
  (ok (default-to u0 (map-get? user-protocol-allocations {user: user, protocol-id: protocol-id})))
)

;; Get active protocol
(define-read-only (get-active-protocol)
  (ok (var-get active-protocol))
)

;; Check if adapter is paused
(define-read-only (is-adapter-paused)
  (ok (var-get adapter-paused))
)

;; Get all protocol rates for comparison
(define-read-only (get-all-protocol-rates)
  (ok {
    zest: (get yield-rate (unwrap-panic (map-get? protocol-info PROTOCOL_ZEST))),
    velar: (get yield-rate (unwrap-panic (map-get? protocol-info PROTOCOL_VELAR))),
    alex: (get yield-rate (unwrap-panic (map-get? protocol-info PROTOCOL_ALEX))),
    stacking: (get yield-rate (unwrap-panic (map-get? protocol-info PROTOCOL_STACKINGDAO)))
  })
)

;; private functions

;; Find maximum value in a list
(define-private (max (a uint) (b uint))
  (if (> a b) a b)
)

