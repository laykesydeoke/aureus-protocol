# notif-queue - API Reference

## notif-queue API Reference

### create-notif-queue
Creates a new notif-queue entry with the given value.

**Parameters:**
- `val` (uint): The initial value

**Returns:** (response uint error)

### update-notif-queue
Updates an existing entry. Only the owner can update.

**Parameters:**
- `id` (uint): Entry ID
- `new-val` (uint): New value

**Returns:** (response bool error)
