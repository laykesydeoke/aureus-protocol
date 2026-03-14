# batch-ops - API Reference

## batch-ops API Reference

### create-batch-ops
Creates a new batch-ops entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-batch-ops
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
