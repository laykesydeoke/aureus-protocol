# dashboard-api - API Reference

## dashboard-api API Reference

### create-dashboard-api
Creates a new dashboard-api entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-dashboard-api
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
