# trace-sys - API Reference

## trace-sys API Reference

### create-trace-sys
Creates a new trace-sys entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-trace-sys
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
