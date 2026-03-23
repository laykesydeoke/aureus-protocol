# metric-agg - Architecture

## metric-agg Architecture

### Data Flow
1. User calls `create-metric-agg` to register
2. Entry stored in `metric-agg-registry` map
3. Owner can `update-metric-agg` or `deactivate-metric-agg`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
