# promo-engine - Architecture

## promo-engine Architecture

### Data Flow
1. User calls `create-promo-engine` to register
2. Entry stored in `promo-engine-registry` map
3. Owner can `update-promo-engine` or `deactivate-promo-engine`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
