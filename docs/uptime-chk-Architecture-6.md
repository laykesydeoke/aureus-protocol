# uptime-chk - Architecture

## uptime-chk Architecture

### Data Flow
1. User calls `create-uptime-chk` to register
2. Entry stored in `uptime-chk-registry` map
3. Owner can `update-uptime-chk` or `deactivate-uptime-chk`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
