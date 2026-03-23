# l10n-mgr - API Reference

## l10n-mgr API Reference

### create-l10n-mgr
Creates a new l10n-mgr entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-l10n-mgr
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
