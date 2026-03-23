# payment-gate - API Reference

## payment-gate API Reference

### create-payment-gate
Creates a new payment-gate entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-payment-gate
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
