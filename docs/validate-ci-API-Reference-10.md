# validate-ci - API Reference

## validate-ci API Reference

### create-validate-ci
Creates a new validate-ci entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-validate-ci
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
