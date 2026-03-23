# token-auth - Architecture

## token-auth Architecture

### Data Flow
1. User calls `create-token-auth` to register
2. Entry stored in `token-auth-registry` map
3. Owner can `update-token-auth` or `deactivate-token-auth`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
