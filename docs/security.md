# Security Model

Aureus Protocol implements defense-in-depth security for institutional users.

## Access Controls

### Owner-Only Functions

The following operations require the contract owner (deployer):

**yield-aggregator:**
- `distribute-yield` — prevents unauthorized yield injection
- `set-emergency-pause` — emergency shutdown capability

**protocol-adapter:**
- `update-protocol-rate` — prevents rate manipulation
- `rebalance-protocols` — prevents unauthorized fund movement
- `set-adapter-pause` — emergency adapter shutdown
- `initialize-adapter` — one-time setup

### Public Functions

Any address may call:
- `deposit-sbtc` — subject to initialization check
- `withdraw-sbtc` — can only withdraw own funds

## Emergency Pause

Both contracts support emergency pause:

```clarity
;; Pause aggregator
(contract-call? .yield-aggregator set-emergency-pause true)

;; Pause adapter
(contract-call? .protocol-adapter set-adapter-pause true)
```

When paused, all user-facing operations revert.

## Proportional Yield Integrity

Yield is calculated as:

```
user_yield = (user_deposit / total_deposits) * total_yield
```

This prevents:
- Front-running yield distributions
- Dust attacks on yield calculations
- Integer overflow via basis-point arithmetic

## Audit Trail

All deposit/withdraw events and yield distributions are permanently on-chain and auditable.
