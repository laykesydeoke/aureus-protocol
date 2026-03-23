#!/bin/bash
# Run failover test suite
set -e
echo "Running failover unit tests..."
npx vitest run tests/failover_unit*
echo "Running failover integration tests..."
npx vitest run tests/failover_integration*
echo "All failover tests passed"
