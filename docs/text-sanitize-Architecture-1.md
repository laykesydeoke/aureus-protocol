# text-sanitize - Architecture

## text-sanitize Architecture

### Data Flow
1. User calls `create-text-sanitize` to register
2. Entry stored in `text-sanitize-registry` map
3. Owner can `update-text-sanitize` or `deactivate-text-sanitize`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
