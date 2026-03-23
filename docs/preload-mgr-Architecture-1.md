# preload-mgr - Architecture

## preload-mgr Architecture

### Data Flow
1. User calls `create-preload-mgr` to register
2. Entry stored in `preload-mgr-registry` map
3. Owner can `update-preload-mgr` or `deactivate-preload-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
