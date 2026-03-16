# Asset Integration Guide

## Integrating New Assets

1. Deploy SIP-010 compatible token contract
2. Call `add-supported-asset` with token principal
3. Users can now deposit using the new asset

## Removing Assets

```clarity
(remove-supported-asset 'SP...token-principal)
```

Removing an asset does not affect existing deposits.
