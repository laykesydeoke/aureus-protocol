# schema-mig - Architecture

## schema-mig Architecture

### Data Flow
1. User calls `create-schema-mig` to register
2. Entry stored in `schema-mig-registry` map
3. Owner can `update-schema-mig` or `deactivate-schema-mig`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
