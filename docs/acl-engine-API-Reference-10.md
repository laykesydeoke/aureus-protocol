# acl-engine - API Reference

## acl-engine API Reference

### create-acl-engine
Creates a new acl-engine entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-acl-engine
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
