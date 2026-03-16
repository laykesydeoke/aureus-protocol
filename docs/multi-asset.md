# Multi-Asset Support

Aureus Protocol supports multiple asset types for yield optimization.

## Adding Assets

```clarity
(add-supported-asset 'SP...contract-address)
```

## Checking Support

```clarity
(is-supported-asset 'SP...contract-address)
(get-asset-count)
```

## Notes

- Only owner can add/remove assets
- Asset count tracks total supported assets
- Removing an asset disables it but keeps count
