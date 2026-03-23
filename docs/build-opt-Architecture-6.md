# build-opt - Architecture

## build-opt Architecture

### Data Flow
1. User calls `create-build-opt` to register
2. Entry stored in `build-opt-registry` map
3. Owner can `update-build-opt` or `deactivate-build-opt`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
