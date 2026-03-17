# rbac-ctrl - API Reference

## rbac-ctrl API Reference

### create-rbac-ctrl
Creates a new rbac-ctrl entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-rbac-ctrl
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
