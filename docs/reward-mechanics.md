# Reward Mechanics

## How Tier Rewards Work

Tier rewards are computed deterministically from on-chain deposit count data.

### Step 1: Count Deposits

Each call to `deposit-sbtc` increments `user-deposit-count` by 1.

### Step 2: Derive Tier

```clarity
(get-user-tier user)
;; → u1 if count < 5
;; → u2 if 5 <= count < 10
;; → u3 if count >= 10
```

### Step 3: Apply Bonus

```clarity
(get-user-tier-bonus user)
;; → u0 for tier 1
;; → u50 for tier 2
;; → u100 for tier 3
```

## Yield Enhancement

The operator uses the bonus when distributing yield:

```
enhanced_yield = base_yield * (10000 + bonus_bps) / 10000
```

For a user with 100 bps bonus receiving 1 sBTC base yield:
```
1.0 * (10000 + 100) / 10000 = 1.01 sBTC
```

## Tenure Metrics

First deposit block enables tenure-based reporting:

```clarity
(get-user-first-deposit-block user)
;; Returns (some block-height) or none
```

Tenure = current block - first deposit block.
