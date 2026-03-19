# schema-mig - API Reference

## schema-mig API Reference

### create-schema-mig
Creates a new schema-mig entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-schema-mig
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
