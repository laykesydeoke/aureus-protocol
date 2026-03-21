# deploy-hook - Architecture

## deploy-hook Architecture

### Data Flow
1. User calls `create-deploy-hook` to register
2. Entry stored in `deploy-hook-registry` map
3. Owner can `update-deploy-hook` or `deactivate-deploy-hook`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
