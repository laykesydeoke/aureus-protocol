# Protocol Governance

Aureus Protocol governance allows the contract owner to adjust operational parameters.

## Governance Parameters

| Parameter | Default | Function |
|-----------|---------|----------|
| `min-deposit-amount` | 1000 | Minimum sBTC deposit |
| `max-withdrawal-pct` | 100 | Max withdrawal as % |
| `governance-action-count` | 0 | Audit counter |

## Admin Functions

### `set-min-deposit` (yield-aggregator)

```clarity
(contract-call? .yield-aggregator set-min-deposit u5000)
```

Sets minimum deposit threshold. All governance actions increment `governance-action-count`.

## Querying Governance State

```clarity
(contract-call? .yield-aggregator get-governance-params)
(contract-call? .yield-aggregator get-min-deposit)
```

## Governance Audit Trail

Each owner action increments `governance-action-count`, providing a lightweight audit trail.
