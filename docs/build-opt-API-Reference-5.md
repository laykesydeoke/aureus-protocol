# build-opt - API Reference

## build-opt API Reference

### create-build-opt
Creates a new build-opt entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-build-opt
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
