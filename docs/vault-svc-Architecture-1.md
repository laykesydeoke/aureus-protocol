# vault-svc - Architecture

## vault-svc Architecture

### Data Flow
1. User calls `create-vault-svc` to register
2. Entry stored in `vault-svc-registry` map
3. Owner can `update-vault-svc` or `deactivate-vault-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
