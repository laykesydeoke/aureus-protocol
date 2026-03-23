# xss-guard - Architecture

## xss-guard Architecture

### Data Flow
1. User calls `create-xss-guard` to register
2. Entry stored in `xss-guard-registry` map
3. Owner can `update-xss-guard` or `deactivate-xss-guard`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
