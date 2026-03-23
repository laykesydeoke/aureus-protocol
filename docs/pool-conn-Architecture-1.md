# pool-conn - Architecture

## pool-conn Architecture

### Data Flow
1. User calls `create-pool-conn` to register
2. Entry stored in `pool-conn-registry` map
3. Owner can `update-pool-conn` or `deactivate-pool-conn`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
