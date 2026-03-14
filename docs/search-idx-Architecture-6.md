# search-idx - Architecture

## search-idx Architecture

### Data Flow
1. User calls `create-search-idx` to register
2. Entry stored in `search-idx-registry` map
3. Owner can `update-search-idx` or `deactivate-search-idx`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
