# text-sanitize - API Reference

## text-sanitize API Reference

### create-text-sanitize
Creates a new text-sanitize entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-text-sanitize
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
