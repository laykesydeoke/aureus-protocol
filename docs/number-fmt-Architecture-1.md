# number-fmt - Architecture

## number-fmt Architecture

### Data Flow
1. User calls `create-number-fmt` to register
2. Entry stored in `number-fmt-registry` map
3. Owner can `update-number-fmt` or `deactivate-number-fmt`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
