# deploy-hook - API Reference

## deploy-hook API Reference

### create-deploy-hook
Creates a new deploy-hook entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-deploy-hook
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
