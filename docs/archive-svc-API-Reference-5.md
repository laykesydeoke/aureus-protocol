# archive-svc - API Reference

## archive-svc API Reference

### create-archive-svc
Creates a new archive-svc entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-archive-svc
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
