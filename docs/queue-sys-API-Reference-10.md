# queue-sys - API Reference

## queue-sys API Reference

### create-queue-sys
Creates a new queue-sys entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-queue-sys
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
