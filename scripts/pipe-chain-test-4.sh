#!/bin/bash
# Run pipe-chain test suite
set -e
echo "Running pipe-chain unit tests..."
npx vitest run tests/pipe-chain_unit*
echo "Running pipe-chain integration tests..."
npx vitest run tests/pipe-chain_integration*
echo "All pipe-chain tests passed"
