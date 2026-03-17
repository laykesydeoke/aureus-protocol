# throttle-svc - API Reference

## throttle-svc API Reference

### create-throttle-svc
Creates a new throttle-svc entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-throttle-svc
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
