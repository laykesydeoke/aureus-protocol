# cache-warm - API Reference

## cache-warm API Reference

### create-cache-warm
Creates a new cache-warm entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-cache-warm
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
