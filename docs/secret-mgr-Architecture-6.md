# secret-mgr - Architecture

## secret-mgr Architecture

### Data Flow
1. User calls `create-secret-mgr` to register
2. Entry stored in `secret-mgr-registry` map
3. Owner can `update-secret-mgr` or `deactivate-secret-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
