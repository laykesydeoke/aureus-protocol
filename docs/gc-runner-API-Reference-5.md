# gc-runner - API Reference

## gc-runner API Reference

### create-gc-runner
Creates a new gc-runner entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-gc-runner
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
