# cors-policy - Architecture

## cors-policy Architecture

### Data Flow
1. User calls `create-cors-policy` to register
2. Entry stored in `cors-policy-registry` map
3. Owner can `update-cors-policy` or `deactivate-cors-policy`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
