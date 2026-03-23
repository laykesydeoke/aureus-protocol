# seed-data - Architecture

## seed-data Architecture

### Data Flow
1. User calls `create-seed-data` to register
2. Entry stored in `seed-data-registry` map
3. Owner can `update-seed-data` or `deactivate-seed-data`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
