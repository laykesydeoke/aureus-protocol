# notif-queue - Architecture

## notif-queue Architecture

### Data Flow
1. User calls `create-notif-queue` to register
2. Entry stored in `notif-queue-registry` map
3. Owner can `update-notif-queue` or `deactivate-notif-queue`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
