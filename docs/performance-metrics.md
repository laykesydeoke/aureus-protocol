# Performance Metrics

Real-time protocol performance tracking for institutional monitoring.

## Available Metrics

```clarity
(get-performance-metrics)
```

Returns:
- `total-transactions`: All-time transaction count
- `total-deposits-count`: Number of deposit events
- `total-withdrawals-count`: Number of withdrawal events
- `total-value-locked`: Current TVL in micro-sBTC
- `avg-yield-bps`: Average yield in basis points

## Protocol Uptime

```clarity
(get-protocol-uptime)
```

Returns blocks since last pause event.
