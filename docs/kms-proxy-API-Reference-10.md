# kms-proxy - API Reference

## kms-proxy API Reference

### create-kms-proxy
Creates a new kms-proxy entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-kms-proxy
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
