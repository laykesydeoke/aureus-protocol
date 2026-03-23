# acl-engine - Architecture

## acl-engine Architecture

### Data Flow
1. User calls `create-acl-engine` to register
2. Entry stored in `acl-engine-registry` map
3. Owner can `update-acl-engine` or `deactivate-acl-engine`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
