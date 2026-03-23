#!/bin/bash
# Run cleanup-svc test suite
set -e
echo "Running cleanup-svc unit tests..."
npx vitest run tests/cleanup-svc_unit*
echo "Running cleanup-svc integration tests..."
npx vitest run tests/cleanup-svc_integration*
echo "All cleanup-svc tests passed"
