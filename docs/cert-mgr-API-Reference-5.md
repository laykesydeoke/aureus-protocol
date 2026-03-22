# cert-mgr - API Reference

## cert-mgr API Reference

### create-cert-mgr
Creates a new cert-mgr entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-cert-mgr
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
