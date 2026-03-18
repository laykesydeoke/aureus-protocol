# latency-mon - Architecture

## latency-mon Architecture

### Data Flow
1. User calls `create-latency-mon` to register
2. Entry stored in `latency-mon-registry` map
3. Owner can `update-latency-mon` or `deactivate-latency-mon`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
