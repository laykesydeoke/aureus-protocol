# number-fmt - API Reference

## number-fmt API Reference

### create-number-fmt
Creates a new number-fmt entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-number-fmt
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
