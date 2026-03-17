# perm-gate - API Reference

## perm-gate API Reference

### create-perm-gate
Creates a new perm-gate entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-perm-gate
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
