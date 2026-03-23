#!/bin/bash
# Run payment-gate test suite
set -e
echo "Running payment-gate unit tests..."
npx vitest run tests/payment-gate_unit*
echo "Running payment-gate integration tests..."
npx vitest run tests/payment-gate_integration*
echo "All payment-gate tests passed"
