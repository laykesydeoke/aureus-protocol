# receipt-log - API Reference

## receipt-log API Reference

### create-receipt-log
Creates a new receipt-log entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-receipt-log
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
