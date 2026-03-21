# cdn-config - Architecture

## cdn-config Architecture

### Data Flow
1. User calls `create-cdn-config` to register
2. Entry stored in `cdn-config-registry` map
3. Owner can `update-cdn-config` or `deactivate-cdn-config`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
