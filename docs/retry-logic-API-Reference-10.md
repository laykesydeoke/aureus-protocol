# retry-logic - API Reference

## retry-logic API Reference

### create-retry-logic
Creates a new retry-logic entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-retry-logic
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
