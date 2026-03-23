# health-chk - Architecture

## health-chk Architecture

### Data Flow
1. User calls `create-health-chk` to register
2. Entry stored in `health-chk-registry` map
3. Owner can `update-health-chk` or `deactivate-health-chk`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
