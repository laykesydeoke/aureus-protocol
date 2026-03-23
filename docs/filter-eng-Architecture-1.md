# filter-eng - Architecture

## filter-eng Architecture

### Data Flow
1. User calls `create-filter-eng` to register
2. Entry stored in `filter-eng-registry` map
3. Owner can `update-filter-eng` or `deactivate-filter-eng`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
