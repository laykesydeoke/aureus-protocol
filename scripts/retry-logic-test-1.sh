#!/bin/bash
# Run retry-logic test suite
set -e
echo "Running retry-logic unit tests..."
npx vitest run tests/retry-logic_unit*
echo "Running retry-logic integration tests..."
npx vitest run tests/retry-logic_integration*
echo "All retry-logic tests passed"
