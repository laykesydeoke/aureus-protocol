#!/bin/bash
# Run currency-fmt test suite
set -e
echo "Running currency-fmt unit tests..."
npx vitest run tests/currency-fmt_unit*
echo "Running currency-fmt integration tests..."
npx vitest run tests/currency-fmt_integration*
echo "All currency-fmt tests passed"
