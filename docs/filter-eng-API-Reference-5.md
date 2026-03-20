# filter-eng - API Reference

## filter-eng API Reference

### create-filter-eng
Creates a new filter-eng entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-filter-eng
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
