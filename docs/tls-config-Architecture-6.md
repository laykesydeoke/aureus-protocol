# tls-config - Architecture

## tls-config Architecture

### Data Flow
1. User calls `create-tls-config` to register
2. Entry stored in `tls-config-registry` map
3. Owner can `update-tls-config` or `deactivate-tls-config`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
