# span-collect - Architecture

## span-collect Architecture

### Data Flow
1. User calls `create-span-collect` to register
2. Entry stored in `span-collect-registry` map
3. Owner can `update-span-collect` or `deactivate-span-collect`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
