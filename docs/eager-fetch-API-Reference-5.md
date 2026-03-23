# eager-fetch - API Reference

## eager-fetch API Reference

### create-eager-fetch
Creates a new eager-fetch entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-eager-fetch
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
