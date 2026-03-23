#!/bin/bash
# Run export-svc test suite
set -e
echo "Running export-svc unit tests..."
npx vitest run tests/export-svc_unit*
echo "Running export-svc integration tests..."
npx vitest run tests/export-svc_integration*
echo "All export-svc tests passed"
