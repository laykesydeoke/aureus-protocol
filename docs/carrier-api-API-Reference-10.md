# carrier-api - API Reference

## carrier-api API Reference

### create-carrier-api
Creates a new carrier-api entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-carrier-api
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
