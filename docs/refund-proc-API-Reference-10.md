# refund-proc - API Reference

## refund-proc API Reference

### create-refund-proc
Creates a new refund-proc entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-refund-proc
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
