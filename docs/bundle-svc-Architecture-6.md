# bundle-svc - Architecture

## bundle-svc Architecture

### Data Flow
1. User calls `create-bundle-svc` to register
2. Entry stored in `bundle-svc-registry` map
3. Owner can `update-bundle-svc` or `deactivate-bundle-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
