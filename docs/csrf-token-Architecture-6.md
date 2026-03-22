# csrf-token - Architecture

## csrf-token Architecture

### Data Flow
1. User calls `create-csrf-token` to register
2. Entry stored in `csrf-token-registry` map
3. Owner can `update-csrf-token` or `deactivate-csrf-token`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
