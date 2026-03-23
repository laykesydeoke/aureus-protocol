# timezone-svc - Architecture

## timezone-svc Architecture

### Data Flow
1. User calls `create-timezone-svc` to register
2. Entry stored in `timezone-svc-registry` map
3. Owner can `update-timezone-svc` or `deactivate-timezone-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
