# compliance - API Reference

## compliance API Reference

### create-compliance
Creates a new compliance entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-compliance
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
