# asset-pipe - Architecture

## asset-pipe Architecture

### Data Flow
1. User calls `create-asset-pipe` to register
2. Entry stored in `asset-pipe-registry` map
3. Owner can `update-asset-pipe` or `deactivate-asset-pipe`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
