# dashboard-api - Architecture

## dashboard-api Architecture

### Data Flow
1. User calls `create-dashboard-api` to register
2. Entry stored in `dashboard-api-registry` map
3. Owner can `update-dashboard-api` or `deactivate-dashboard-api`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
