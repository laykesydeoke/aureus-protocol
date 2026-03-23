# perm-gate - Architecture

## perm-gate Architecture

### Data Flow
1. User calls `create-perm-gate` to register
2. Entry stored in `perm-gate-registry` map
3. Owner can `update-perm-gate` or `deactivate-perm-gate`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
