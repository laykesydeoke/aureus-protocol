# l10n-mgr - Architecture

## l10n-mgr Architecture

### Data Flow
1. User calls `create-l10n-mgr` to register
2. Entry stored in `l10n-mgr-registry` map
3. Owner can `update-l10n-mgr` or `deactivate-l10n-mgr`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
