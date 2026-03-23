# webhook-mgr - Architecture

## webhook-mgr Architecture

### Data Flow
1. User calls `create-webhook-mgr` to register
2. Entry stored in `webhook-mgr-registry` map
3. Owner can `update-webhook-mgr` or `deactivate-webhook-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
