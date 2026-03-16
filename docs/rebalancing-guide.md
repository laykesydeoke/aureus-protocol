# Rebalancing Guide

## Overview

The rebalancing mechanism compares current protocol rates and moves
deposits when a better yield opportunity exceeds the threshold.

## Threshold Configuration

Set threshold in basis points (1 bps = 0.01%):

- Low threshold (25 bps): Frequent rebalancing
- Medium threshold (50 bps): Default behavior
- High threshold (100 bps): Conservative rebalancing

## Protocol Priority

1. Zest Protocol (highest target rate)
2. ALEX Protocol
3. Velar Protocol
4. StackingDAO

## Disabling Rebalancing

During high network congestion, disable optimization:

```clarity
(set-optimization-enabled false)
```
