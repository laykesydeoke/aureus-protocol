# Protocol Overview

Aureus Protocol is an institutional-grade sBTC yield aggregator built on Stacks.

## Architecture

### Contracts

| Contract | Purpose |
|----------|---------|
| `yield-aggregator` | Core deposit/withdraw/yield distribution |
| `protocol-adapter` | Multi-protocol routing and rate comparison |
| `mock-sbtc` | Test token for development and testing |

### Yield Flow

1. User deposits sBTC via `deposit-sbtc`
2. Funds are tracked in `user-deposits` map
3. Operator calls `distribute-yield` with earned yield
4. Yield is proportionally distributed based on deposit share
5. Users call `withdraw-sbtc` to claim principal + yield

### Protocol Routing

The adapter maintains rates for 4 protocols:
- **Zest** (Protocol ID: 1)
- **Velar** (Protocol ID: 2)
- **ALEX** (Protocol ID: 3)
- **StackingDAO** (Protocol ID: 4)

The optimal protocol is automatically identified via `get-optimal-protocol`.

## Security

- Emergency pause on both contracts
- Owner-only admin functions
- Proportional yield calculation prevents manipulation
- Deposit history tracking for audit
