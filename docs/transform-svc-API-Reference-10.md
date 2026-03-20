# transform-svc - API Reference

## transform-svc API Reference

### create-transform-svc
Creates a new transform-svc entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-transform-svc
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
