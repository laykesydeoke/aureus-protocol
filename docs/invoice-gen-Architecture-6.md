# invoice-gen - Architecture

## invoice-gen Architecture

### Data Flow
1. User calls `create-invoice-gen` to register
2. Entry stored in `invoice-gen-registry` map
3. Owner can `update-invoice-gen` or `deactivate-invoice-gen`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
