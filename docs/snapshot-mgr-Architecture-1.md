# snapshot-mgr - Architecture

## snapshot-mgr Architecture

### Data Flow
1. User calls `create-snapshot-mgr` to register
2. Entry stored in `snapshot-mgr-registry` map
3. Owner can `update-snapshot-mgr` or `deactivate-snapshot-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
