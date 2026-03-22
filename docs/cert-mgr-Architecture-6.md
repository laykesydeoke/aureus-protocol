# cert-mgr - Architecture

## cert-mgr Architecture

### Data Flow
1. User calls `create-cert-mgr` to register
2. Entry stored in `cert-mgr-registry` map
3. Owner can `update-cert-mgr` or `deactivate-cert-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
