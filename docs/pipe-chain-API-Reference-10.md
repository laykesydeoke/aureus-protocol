# pipe-chain - API Reference

## pipe-chain API Reference

### create-pipe-chain
Creates a new pipe-chain entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-pipe-chain
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
