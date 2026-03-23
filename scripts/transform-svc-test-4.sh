#!/bin/bash
# Run transform-svc test suite
set -e
echo "Running transform-svc unit tests..."
npx vitest run tests/transform-svc_unit*
echo "Running transform-svc integration tests..."
npx vitest run tests/transform-svc_integration*
echo "All transform-svc tests passed"
