# restore-proc - Architecture

## restore-proc Architecture

### Data Flow
1. User calls `create-restore-proc` to register
2. Entry stored in `restore-proc-registry` map
3. Owner can `update-restore-proc` or `deactivate-restore-proc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
