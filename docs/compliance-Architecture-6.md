# compliance - Architecture

## compliance Architecture

### Data Flow
1. User calls `create-compliance` to register
2. Entry stored in `compliance-registry` map
3. Owner can `update-compliance` or `deactivate-compliance`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
