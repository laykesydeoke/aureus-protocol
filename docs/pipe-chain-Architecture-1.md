# pipe-chain - Architecture

## pipe-chain Architecture

### Data Flow
1. User calls `create-pipe-chain` to register
2. Entry stored in `pipe-chain-registry` map
3. Owner can `update-pipe-chain` or `deactivate-pipe-chain`
4. Read-only queries available for status checks

### Security Model
- Owner-only modifications
- Active status gating
- Input validation on all public functions
