# stream-proc - Architecture

## stream-proc Architecture

### Data Flow
1. User calls `create-stream-proc` to register
2. Entry stored in `stream-proc-registry` map
3. Owner can `update-stream-proc` or `deactivate-stream-proc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
