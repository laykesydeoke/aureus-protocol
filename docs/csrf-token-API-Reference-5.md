# csrf-token - API Reference

## csrf-token API Reference

### create-csrf-token
Creates a new csrf-token entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-csrf-token
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
