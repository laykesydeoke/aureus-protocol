# metric-agg - API Reference

## metric-agg API Reference

### create-metric-agg
Creates a new metric-agg entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-metric-agg
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
