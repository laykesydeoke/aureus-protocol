# format-svc - Architecture

## format-svc Architecture

### Data Flow
1. User calls `create-format-svc` to register
2. Entry stored in `format-svc-registry` map
3. Owner can `update-format-svc` or `deactivate-format-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
