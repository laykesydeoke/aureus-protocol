# api-gw - Architecture

## api-gw Architecture

### Data Flow
1. User calls `create-api-gw` to register
2. Entry stored in `api-gw-registry` map
3. Owner can `update-api-gw` or `deactivate-api-gw`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
