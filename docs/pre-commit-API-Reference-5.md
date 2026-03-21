# pre-commit - API Reference

## pre-commit API Reference

### create-pre-commit
Creates a new pre-commit entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-pre-commit
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
