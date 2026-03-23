# throttle-svc - Architecture

## throttle-svc Architecture

### Data Flow
1. User calls `create-throttle-svc` to register
2. Entry stored in `throttle-svc-registry` map
3. Owner can `update-throttle-svc` or `deactivate-throttle-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
