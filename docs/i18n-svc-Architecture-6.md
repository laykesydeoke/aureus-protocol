# i18n-svc - Architecture

## i18n-svc Architecture

### Data Flow
1. User calls `create-i18n-svc` to register
2. Entry stored in `i18n-svc-registry` map
3. Owner can `update-i18n-svc` or `deactivate-i18n-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
