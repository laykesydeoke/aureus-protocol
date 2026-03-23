# lint-check - Architecture

## lint-check Architecture

### Data Flow
1. User calls `create-lint-check` to register
2. Entry stored in `lint-check-registry` map
3. Owner can `update-lint-check` or `deactivate-lint-check`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
