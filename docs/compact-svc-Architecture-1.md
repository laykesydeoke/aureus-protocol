# compact-svc - Architecture

## compact-svc Architecture

### Data Flow
1. User calls `create-compact-svc` to register
2. Entry stored in `compact-svc-registry` map
3. Owner can `update-compact-svc` or `deactivate-compact-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
