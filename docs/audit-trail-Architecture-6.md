# audit-trail - Architecture

## audit-trail Architecture

### Data Flow
1. User calls `create-audit-trail` to register
2. Entry stored in `audit-trail-registry` map
3. Owner can `update-audit-trail` or `deactivate-audit-trail`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
