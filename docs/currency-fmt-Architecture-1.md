# currency-fmt - Architecture

## currency-fmt Architecture

### Data Flow
1. User calls `create-currency-fmt` to register
2. Entry stored in `currency-fmt-registry` map
3. Owner can `update-currency-fmt` or `deactivate-currency-fmt`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
