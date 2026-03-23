#!/bin/bash
# Run timezone-svc test suite
set -e
echo "Running timezone-svc unit tests..."
npx vitest run tests/timezone-svc_unit*
echo "Running timezone-svc integration tests..."
npx vitest run tests/timezone-svc_integration*
echo "All timezone-svc tests passed"
