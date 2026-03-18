# alert-rule - API Reference

## alert-rule API Reference

### create-alert-rule
Creates a new alert-rule entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-alert-rule
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
