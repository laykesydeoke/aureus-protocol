# session-mgr - Architecture

## session-mgr Architecture

### Data Flow
1. User calls `create-session-mgr` to register
2. Entry stored in `session-mgr-registry` map
3. Owner can `update-session-mgr` or `deactivate-session-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
