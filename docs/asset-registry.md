# Asset Registry

The asset registry maintains which assets are accepted by the protocol.

## Registry Operations

| Operation | Function | Access |
|-----------|----------|--------|
| Add asset | `add-supported-asset` | Owner only |
| Remove asset | `remove-supported-asset` | Owner only |
| Check support | `is-supported-asset` | Public |
| Get count | `get-asset-count` | Public |

## Default Assets

- sBTC (mock-sbtc): Supported by default at deployment
