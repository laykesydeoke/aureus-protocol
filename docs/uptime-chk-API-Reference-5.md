# uptime-chk - API Reference

## uptime-chk API Reference

### create-uptime-chk
Creates a new uptime-chk entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-uptime-chk
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
