#!/bin/bash
# Run number-fmt test suite
set -e
echo "Running number-fmt unit tests..."
npx vitest run tests/number-fmt_unit*
echo "Running number-fmt integration tests..."
npx vitest run tests/number-fmt_integration*
echo "All number-fmt tests passed"
