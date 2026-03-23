# retry-logic - Architecture

## retry-logic Architecture

### Data Flow
1. User calls `create-retry-logic` to register
2. Entry stored in `retry-logic-registry` map
3. Owner can `update-retry-logic` or `deactivate-retry-logic`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
