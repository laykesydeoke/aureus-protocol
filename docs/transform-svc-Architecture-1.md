# transform-svc - Architecture

## transform-svc Architecture

### Data Flow
1. User calls `create-transform-svc` to register
2. Entry stored in `transform-svc-registry` map
3. Owner can `update-transform-svc` or `deactivate-transform-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
