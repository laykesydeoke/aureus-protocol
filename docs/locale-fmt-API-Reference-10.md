# locale-fmt - API Reference

## locale-fmt API Reference

### create-locale-fmt
Creates a new locale-fmt entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-locale-fmt
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
