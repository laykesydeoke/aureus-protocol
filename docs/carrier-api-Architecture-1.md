# carrier-api - Architecture

## carrier-api Architecture

### Data Flow
1. User calls `create-carrier-api` to register
2. Entry stored in `carrier-api-registry` map
3. Owner can `update-carrier-api` or `deactivate-carrier-api`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
