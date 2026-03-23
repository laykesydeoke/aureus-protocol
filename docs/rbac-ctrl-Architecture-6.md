# rbac-ctrl - Architecture

## rbac-ctrl Architecture

### Data Flow
1. User calls `create-rbac-ctrl` to register
2. Entry stored in `rbac-ctrl-registry` map
3. Owner can `update-rbac-ctrl` or `deactivate-rbac-ctrl`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
