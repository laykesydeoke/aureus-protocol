# backup-svc - Architecture

## backup-svc Architecture

### Data Flow
1. User calls `create-backup-svc` to register
2. Entry stored in `backup-svc-registry` map
3. Owner can `update-backup-svc` or `deactivate-backup-svc`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
