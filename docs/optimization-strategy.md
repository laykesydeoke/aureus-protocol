# Optimization Strategy

## Automatic Yield Routing

Aureus monitors all integrated protocol rates and routes deposits to maximize yield.

## Decision Matrix

| Condition | Action |
|-----------|--------|
| Rate diff > threshold | Rebalance to higher protocol |
| Optimization disabled | Hold current allocation |
| Emergency pause | No rebalancing |

## Integration

The protocol-adapter contract provides `get-optimal-protocol` which
yield-aggregator uses when optimization is enabled.
