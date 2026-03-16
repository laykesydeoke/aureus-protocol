# Yield Optimization

Aureus Protocol includes dynamic yield optimization to maximize returns.

## Parameters

- **Rebalance Threshold**: Minimum APY difference (bps) to trigger rebalancing
- **Target Protocol**: Currently active protocol for yield routing
- **Optimization Enabled**: Toggle to enable/disable auto-optimization

## Admin Controls

Only the contract owner can update optimization parameters:

```clarity
(set-rebalance-threshold u50)
(set-optimization-enabled true)
```

## Reading Optimization State

```clarity
(get-optimization-params)
```

Returns current rebalance threshold, target protocol, and enabled status.
