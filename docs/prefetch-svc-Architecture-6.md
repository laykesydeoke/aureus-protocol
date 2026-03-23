# prefetch-svc - Architecture

## prefetch-svc Architecture

### Data Flow
1. User calls `create-prefetch-svc` to register
2. Entry stored in `prefetch-svc-registry` map
3. Owner can `update-prefetch-svc` or `deactivate-prefetch-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
