# xss-guard - API Reference

## xss-guard API Reference

### create-xss-guard
Creates a new xss-guard entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-xss-guard
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
