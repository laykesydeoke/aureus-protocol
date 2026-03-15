# load-bal - Architecture

## load-bal Architecture

### Data Flow
1. User calls `create-load-bal` to register
2. Entry stored in `load-bal-registry` map
3. Owner can `update-load-bal` or `deactivate-load-bal`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
