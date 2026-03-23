# discount-calc - Architecture

## discount-calc Architecture

### Data Flow
1. User calls `create-discount-calc` to register
2. Entry stored in `discount-calc-registry` map
3. Owner can `update-discount-calc` or `deactivate-discount-calc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
