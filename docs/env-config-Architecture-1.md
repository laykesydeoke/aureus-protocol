# env-config - Architecture

## env-config Architecture

### Data Flow
1. User calls `create-env-config` to register
2. Entry stored in `env-config-registry` map
3. Owner can `update-env-config` or `deactivate-env-config`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
