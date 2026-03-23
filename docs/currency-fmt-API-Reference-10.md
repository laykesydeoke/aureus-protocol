# currency-fmt - API Reference

## currency-fmt API Reference

### create-currency-fmt
Creates a new currency-fmt entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-currency-fmt
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
