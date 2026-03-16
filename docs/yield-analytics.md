# Yield Analytics

Aureus Protocol provides comprehensive on-chain yield analytics for institutional users.

## Read-Only Analytics Functions

### `get-yield-analytics` (yield-aggregator)

Returns a snapshot of the aggregator state:

```clarity
(contract-call? .yield-aggregator get-yield-analytics)
```

Returns:
```
{
  total-deposits: uint,      ;; Total sBTC deposited
  total-yield-earned: uint,  ;; Cumulative yield distributed
  is-paused: bool,           ;; Emergency pause state
  is-initialized: bool       ;; Contract initialization state
}
```

### `get-user-yield-ratio` (yield-aggregator)

Returns a user's proportional share of the pool in basis points (10000 = 100%):

```clarity
(contract-call? .yield-aggregator get-user-yield-ratio 'USER_ADDRESS)
```

### `get-adapter-analytics` (protocol-adapter)

Returns adapter state snapshot:

```clarity
(contract-call? .protocol-adapter get-adapter-analytics)
```

## Protocol Rate Comparison

```clarity
(contract-call? .protocol-adapter get-all-protocol-rates)
```

Returns current yield rates for all integrated protocols (Zest, Velar, ALEX, StackingDAO).
