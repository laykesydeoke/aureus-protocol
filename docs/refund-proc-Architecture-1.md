# refund-proc - Architecture

## refund-proc Architecture

### Data Flow
1. User calls `create-refund-proc` to register
2. Entry stored in `refund-proc-registry` map
3. Owner can `update-refund-proc` or `deactivate-refund-proc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
