# Deposit Rewards System

Aureus Protocol rewards loyal depositors with a tiered bonus system.

## Tier Structure

| Tier | Deposit Count | Bonus (bps) |
|------|---------------|-------------|
| 1 | 1-4 | 0 |
| 2 | 5-9 | 50 |
| 3 | 10+ | 100 |

## Query User Tier

```clarity
(contract-call? .yield-aggregator get-user-tier 'USER_ADDRESS)
```

Returns `u1`, `u2`, or `u3`.

## Query Bonus Rate

```clarity
(contract-call? .yield-aggregator get-user-tier-bonus 'USER_ADDRESS)
```

Returns bonus in basis points (50 = 0.5%).

## Deposit Count

```clarity
(contract-call? .yield-aggregator get-user-deposit-count 'USER_ADDRESS)
```

## First Deposit Block

```clarity
(contract-call? .yield-aggregator get-user-first-deposit-block 'USER_ADDRESS)
```

Useful for calculating tenure and applying time-weighted bonuses.

## Bonus Mechanics

The tier bonus is applied off-chain by the operator when calculating yield distributions. Future versions may apply it directly in `distribute-yield`.
