# latency-mon - API Reference

## latency-mon API Reference

### create-latency-mon
Creates a new latency-mon entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-latency-mon
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
