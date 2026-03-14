#!/bin/bash
# Run rate-limit test suite
set -e
echo "Running rate-limit unit tests..."
npx vitest run tests/rate-limit_unit*
echo "Running rate-limit integration tests..."
npx vitest run tests/rate-limit_integration*
echo "All rate-limit tests passed"
