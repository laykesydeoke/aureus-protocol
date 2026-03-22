# csp-header - Architecture

## csp-header Architecture

### Data Flow
1. User calls `create-csp-header` to register
2. Entry stored in `csp-header-registry` map
3. Owner can `update-csp-header` or `deactivate-csp-header`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
