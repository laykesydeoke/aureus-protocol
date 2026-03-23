# rate-limit - Architecture

## rate-limit Architecture

### Data Flow
1. User calls `create-rate-limit` to register
2. Entry stored in `rate-limit-registry` map
3. Owner can `update-rate-limit` or `deactivate-rate-limit`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
