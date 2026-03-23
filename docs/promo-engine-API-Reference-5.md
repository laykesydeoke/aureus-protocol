# promo-engine - API Reference

## promo-engine API Reference

### create-promo-engine
Creates a new promo-engine entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-promo-engine
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
