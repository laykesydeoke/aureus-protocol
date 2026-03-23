# circuit-brk - Architecture

## circuit-brk Architecture

### Data Flow
1. User calls `create-circuit-brk` to register
2. Entry stored in `circuit-brk-registry` map
3. Owner can `update-circuit-brk` or `deactivate-circuit-brk`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
