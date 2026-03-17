#!/bin/bash
# Run throttle-svc test suite
set -e
echo "Running throttle-svc unit tests..."
npx vitest run tests/throttle-svc_unit*
echo "Running throttle-svc integration tests..."
npx vitest run tests/throttle-svc_integration*
echo "All throttle-svc tests passed"
