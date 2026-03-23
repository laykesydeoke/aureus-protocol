# health-chk - API Reference

## health-chk API Reference

### create-health-chk
Creates a new health-chk entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-health-chk
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
