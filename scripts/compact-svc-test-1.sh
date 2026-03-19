#!/bin/bash
# Run compact-svc test suite
set -e
echo "Running compact-svc unit tests..."
npx vitest run tests/compact-svc_unit*
echo "Running compact-svc integration tests..."
npx vitest run tests/compact-svc_integration*
echo "All compact-svc tests passed"
