# rate-limit - API Reference

## rate-limit API Reference

### create-rate-limit
Creates a new rate-limit entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-rate-limit
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
