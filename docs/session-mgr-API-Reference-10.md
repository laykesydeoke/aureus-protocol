# session-mgr - API Reference

## session-mgr API Reference

### create-session-mgr
Creates a new session-mgr entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-session-mgr
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
