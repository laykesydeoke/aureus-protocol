# archive-svc - Architecture

## archive-svc Architecture

### Data Flow
1. User calls `create-archive-svc` to register
2. Entry stored in `archive-svc-registry` map
3. Owner can `update-archive-svc` or `deactivate-archive-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
