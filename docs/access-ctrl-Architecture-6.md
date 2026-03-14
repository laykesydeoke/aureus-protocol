# access-ctrl - Architecture

## access-ctrl Architecture

### Data Flow
1. User calls `create-access-ctrl` to register
2. Entry stored in `access-ctrl-registry` map
3. Owner can `update-access-ctrl` or `deactivate-access-ctrl`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
