# usage-alert - API Reference

## usage-alert API Reference

### create-usage-alert
Creates a new usage-alert entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-usage-alert
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
