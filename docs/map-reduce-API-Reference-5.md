# map-reduce - API Reference

## map-reduce API Reference

### create-map-reduce
Creates a new map-reduce entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-map-reduce
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
