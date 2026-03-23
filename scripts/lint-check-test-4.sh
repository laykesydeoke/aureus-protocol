#!/bin/bash
# Run lint-check test suite
set -e
echo "Running lint-check unit tests..."
npx vitest run tests/lint-check_unit*
echo "Running lint-check integration tests..."
npx vitest run tests/lint-check_integration*
echo "All lint-check tests passed"
