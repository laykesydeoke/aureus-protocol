# timeout-mgr - API Reference

## timeout-mgr API Reference

### create-timeout-mgr
Creates a new timeout-mgr entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-timeout-mgr
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
