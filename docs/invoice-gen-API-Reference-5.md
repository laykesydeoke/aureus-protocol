# invoice-gen - API Reference

## invoice-gen API Reference

### create-invoice-gen
Creates a new invoice-gen entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-invoice-gen
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
