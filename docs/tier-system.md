# Tier System Reference

## Overview

The Aureus tier system incentivizes repeat depositors with increasing yield bonuses.

## Tier Thresholds

Tiers are based on cumulative deposit transaction count, not amount.

| Tier | Min Deposits | Bonus APY Added |
|------|-------------|-----------------|
| Bronze (1) | 1 | 0 bps |
| Silver (2) | 5 | 50 bps |
| Gold (3) | 10 | 100 bps |

## Advancement

Tier is calculated automatically on every read. There is no manual tier claim needed.

## Bonus Application

Bonuses are tracked via `get-user-tier-bonus`. The operator applies these when calling `distribute-yield`.

## Example Calculation

Alice with 12 deposits:
- Tier: 3 (Gold)
- Bonus: 100 bps

If baseline yield is 8% APY, Alice earns 8% + 1% = 9% effective APY.

## Multi-User Tiers

Each user's tier is tracked independently. Tier progression is not affected by other users' activity.
