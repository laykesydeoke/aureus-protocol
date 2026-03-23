# event-sys - Architecture

## event-sys Architecture

### Data Flow
1. User calls `create-event-sys` to register
2. Entry stored in `event-sys-registry` map
3. Owner can `update-event-sys` or `deactivate-event-sys`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
