# gc-runner - Architecture

## gc-runner Architecture

### Data Flow
1. User calls `create-gc-runner` to register
2. Entry stored in `gc-runner-registry` map
3. Owner can `update-gc-runner` or `deactivate-gc-runner`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
