# log-rotate - API Reference

## log-rotate API Reference

### create-log-rotate
Creates a new log-rotate entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-log-rotate
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
