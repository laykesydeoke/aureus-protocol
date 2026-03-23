# locale-fmt - Architecture

## locale-fmt Architecture

### Data Flow
1. User calls `create-locale-fmt` to register
2. Entry stored in `locale-fmt-registry` map
3. Owner can `update-locale-fmt` or `deactivate-locale-fmt`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
