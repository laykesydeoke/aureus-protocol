#!/bin/bash
# Run prefetch-svc test suite
set -e
echo "Running prefetch-svc unit tests..."
npx vitest run tests/prefetch-svc_unit*
echo "Running prefetch-svc integration tests..."
npx vitest run tests/prefetch-svc_integration*
echo "All prefetch-svc tests passed"
