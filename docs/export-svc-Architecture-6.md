# export-svc - Architecture

## export-svc Architecture

### Data Flow
1. User calls `create-export-svc` to register
2. Entry stored in `export-svc-registry` map
3. Owner can `update-export-svc` or `deactivate-export-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
