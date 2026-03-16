# Aureus Protocol

## Project Overview

Aureus Protocol is a professional-grade digital asset optimization platform designed for institutional users. Built with Clarity 4 on the Stacks blockchain, it provides secure and efficient Bitcoin-backed asset enhancement through intelligent smart contract automation. The name "Aureus" evokes the golden standard of value optimization in decentralized finance.

## Technology Stack

- **Clarinet**: v3.11.0+
- **Clarity**: Version 4
- **Testing**: Vitest with @hirosystems/clarinet-sdk
- **TypeScript**: Latest version for type safety
- **Node.js**: Modern JavaScript runtime

## Features

### Core Functionality
- **Institutional-grade Bitcoin-backed asset deposits and withdrawals**
- **Automated value optimization calculation and distribution**
- **Comprehensive security controls with emergency pause**
- **On-chain yield analytics snapshot**
- **User yield ratio calculations (basis points)**
- **Protocol adapter analytics and rate comparison**
- **Multi-user proportional yield distribution**
- **Deposit rewards tier system (Bronze/Silver/Gold)**
- **Deposit count tracking per user**
- **Tier-based bonus yield (0/50/100 bps)**
- **First deposit block tracking for tenure rewards**
- **Detailed transaction history and audit trails**
- **Enhanced precision calculations using Clarity 4**

### Security Features
- **Contract owner access controls**
- **Emergency pause mechanism**
- **Comprehensive input validation**
- **Secure balance tracking**

## Contract Architecture

### yield-aggregator.clar
The main contract implementing core asset optimization functionality:

- `initialize()` - Initialize the protocol (owner only)
- `deposit-sbtc(amount, token)` - Deposit Bitcoin-backed tokens for value optimization
- `withdraw-sbtc(amount, token)` - Withdraw deposited tokens plus earned returns
- `distribute-yield(total-yield)` - Distribute optimized returns to depositors (owner only)
- `set-emergency-pause(pause)` - Emergency pause control (owner only)

### Read-Only Functions
- `get-user-deposit(user)` - Get user's deposit balance
- `get-user-yield(user)` - Get user's earned yield
- `get-total-deposits()` - Get total contract deposits
- `get-total-yield-earned()` - Get total yield distributed
- `is-initialized()` - Check initialization status
- `is-emergency-paused()` - Check emergency pause status
- `get-user-deposit-history(user)` - Get user's deposit history

## Setup Instructions

### Prerequisites
- Node.js (v18+)
- Clarinet CLI (v3.3.0+)
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/laykesydeoke/aureus-protocol.git
cd aureus-protocol
```

2. Install dependencies:
```bash
npm install
```

3. Verify contract syntax:
```bash
clarinet check
```

4. Run tests:
```bash
npm run test
```

## Development Workflow

### Contract Development
- All contracts use Clarity 4 with latest epoch support
- Comprehensive error handling and validation
- Event logging for all major operations
- Gas-optimized implementations

### Testing Strategy
- Unit tests for all contract functions
- Integration tests for complete workflows
- Edge case and error condition testing
- Security validation testing

### Code Quality
- TypeScript for type safety
- Comprehensive documentation
- Consistent naming conventions
- Security best practices

## Contract Deployment

### Local Testing
```bash
# Check contract syntax
clarinet check

# Run test suite
npm run test

# Start local devnet
clarinet integrate
```

### Mainnet Deployment
Follow Stacks ecosystem deployment procedures using Clarinet's deployment tools.

## Security Considerations

- **Access Control**: Owner-only functions for critical operations
- **Emergency Controls**: Pause mechanism for crisis situations
- **Input Validation**: Comprehensive parameter checking
- **Balance Verification**: Secure token balance management
- **Event Logging**: Complete audit trail for all operations

## Code4STX Compliance

This project is designed for Code4STX submissions with:
- ✅ Open source GitHub repository
- ✅ Clarity 4 contracts with Nakamoto support
- ✅ Professional documentation
- ✅ Comprehensive testing suite
- ✅ Institutional-grade features
- ✅ Modern development standards

## Frontend

The protocol includes a landing page with:
- Real-time protocol rate display
- Interactive deposit vault interface
- Multi-protocol status overview

Start frontend:
```bash
cd frontend && npx serve .
```

## Future Enhancements

- Automated rebalancing triggers
- Enhanced compliance reporting
- Advanced optimization algorithms

## Contributing

This project follows modern Stacks development practices. Contributions should maintain code quality standards and include comprehensive tests.

## License

Open source - suitable for Code4STX submission and community development.

---

**Aureus Protocol** - Where digital gold meets intelligent optimization. Built with Clarity 4 and modern Stacks tooling for institutional-grade DeFi applications.