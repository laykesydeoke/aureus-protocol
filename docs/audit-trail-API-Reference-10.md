# audit-trail - API Reference

## audit-trail API Reference

### create-audit-trail
Creates a new audit-trail entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-audit-trail
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
