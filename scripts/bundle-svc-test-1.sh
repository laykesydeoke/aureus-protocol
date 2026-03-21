#!/bin/bash
# Run bundle-svc test suite
set -e
echo "Running bundle-svc unit tests..."
npx vitest run tests/bundle-svc_unit*
echo "Running bundle-svc integration tests..."
npx vitest run tests/bundle-svc_integration*
echo "All bundle-svc tests passed"
