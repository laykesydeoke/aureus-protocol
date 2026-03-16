# Admin Guide

This guide covers all administrative operations for Aureus Protocol operators.

## Contract Owner Privileges

The contract deployer has exclusive access to:
- `initialize` / `initialize-adapter`
- `set-emergency-pause` / `set-adapter-pause`
- `distribute-yield` / `credit-user-yield`
- `update-protocol-rate`
- `rebalance-protocols`
- `set-min-deposit`

## Day-to-Day Operations

### Yield Distribution

Distribute yield weekly:
```clarity
(contract-call? .yield-aggregator distribute-yield u10000000)
```

### Protocol Rate Updates

Keep rates current with market conditions:
```clarity
(contract-call? .protocol-adapter update-protocol-rate u1 u900)
```

### Rebalancing

Move funds to highest-yield protocol:
```clarity
(contract-call? .protocol-adapter rebalance-protocols .mock-sbtc)
```

## Governance Actions

All admin actions are tracked in `governance-action-count`. Monitor this for compliance.

## Emergency Procedures

1. Pause all operations: `set-emergency-pause true`
2. Investigate the issue
3. Resume: `set-emergency-pause false`
