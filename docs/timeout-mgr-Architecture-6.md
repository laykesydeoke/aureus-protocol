# timeout-mgr - Architecture

## timeout-mgr Architecture

### Data Flow
1. User calls `create-timeout-mgr` to register
2. Entry stored in `timeout-mgr-registry` map
3. Owner can `update-timeout-mgr` or `deactivate-timeout-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
