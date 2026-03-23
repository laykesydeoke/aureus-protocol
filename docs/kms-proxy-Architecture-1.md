# kms-proxy - Architecture

## kms-proxy Architecture

### Data Flow
1. User calls `create-kms-proxy` to register
2. Entry stored in `kms-proxy-registry` map
3. Owner can `update-kms-proxy` or `deactivate-kms-proxy`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
