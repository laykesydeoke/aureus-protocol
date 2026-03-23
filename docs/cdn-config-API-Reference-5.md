# cdn-config - API Reference

## cdn-config API Reference

### create-cdn-config
Creates a new cdn-config entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-cdn-config
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
