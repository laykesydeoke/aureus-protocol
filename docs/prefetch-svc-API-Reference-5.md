# prefetch-svc - API Reference

## prefetch-svc API Reference

### create-prefetch-svc
Creates a new prefetch-svc entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-prefetch-svc
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
