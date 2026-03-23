#!/bin/bash
# Run discount-calc test suite
set -e
echo "Running discount-calc unit tests..."
npx vitest run tests/discount-calc_unit*
echo "Running discount-calc integration tests..."
npx vitest run tests/discount-calc_integration*
echo "All discount-calc tests passed"
