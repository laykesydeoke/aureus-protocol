# slug-gen - API Reference

## slug-gen API Reference

### create-slug-gen
Creates a new slug-gen entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-slug-gen
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
