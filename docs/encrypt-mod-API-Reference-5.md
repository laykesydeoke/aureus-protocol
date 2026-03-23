# encrypt-mod - API Reference

## encrypt-mod API Reference

### create-encrypt-mod
Creates a new encrypt-mod entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-encrypt-mod
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
