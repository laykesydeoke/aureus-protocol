# slug-gen - Architecture

## slug-gen Architecture

### Data Flow
1. User calls `create-slug-gen` to register
2. Entry stored in `slug-gen-registry` map
3. Owner can `update-slug-gen` or `deactivate-slug-gen`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
