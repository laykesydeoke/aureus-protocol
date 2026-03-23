# rollover-mgr - Architecture

## rollover-mgr Architecture

### Data Flow
1. User calls `create-rollover-mgr` to register
2. Entry stored in `rollover-mgr-registry` map
3. Owner can `update-rollover-mgr` or `deactivate-rollover-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
