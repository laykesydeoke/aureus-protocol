# test-runner - Architecture

## test-runner Architecture

### Data Flow
1. User calls `create-test-runner` to register
2. Entry stored in `test-runner-registry` map
3. Owner can `update-test-runner` or `deactivate-test-runner`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
