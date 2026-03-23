# circuit-brk - API Reference

## circuit-brk API Reference

### create-circuit-brk
Creates a new circuit-brk entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-circuit-brk
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
