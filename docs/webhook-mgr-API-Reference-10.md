# webhook-mgr - API Reference

## webhook-mgr API Reference

### create-webhook-mgr
Creates a new webhook-mgr entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-webhook-mgr
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
