#!/bin/bash
# Run batch-ops test suite
set -e
echo "Running batch-ops unit tests..."
npx vitest run tests/batch-ops_unit*
echo "Running batch-ops integration tests..."
npx vitest run tests/batch-ops_integration*
echo "All batch-ops tests passed"
