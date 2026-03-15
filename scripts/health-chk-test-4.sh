#!/bin/bash
# Run health-chk test suite
set -e
echo "Running health-chk unit tests..."
npx vitest run tests/health-chk_unit*
echo "Running health-chk integration tests..."
npx vitest run tests/health-chk_integration*
echo "All health-chk tests passed"
