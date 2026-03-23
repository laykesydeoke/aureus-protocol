# purge-job - Architecture

## purge-job Architecture

### Data Flow
1. User calls `create-purge-job` to register
2. Entry stored in `purge-job-registry` map
3. Owner can `update-purge-job` or `deactivate-purge-job`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
