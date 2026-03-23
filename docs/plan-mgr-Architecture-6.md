# plan-mgr - Architecture

## plan-mgr Architecture

### Data Flow
1. User calls `create-plan-mgr` to register
2. Entry stored in `plan-mgr-registry` map
3. Owner can `update-plan-mgr` or `deactivate-plan-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
