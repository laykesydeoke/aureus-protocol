# report-gen - Architecture

## report-gen Architecture

### Data Flow
1. User calls `create-report-gen` to register
2. Entry stored in `report-gen-registry` map
3. Owner can `update-report-gen` or `deactivate-report-gen`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
