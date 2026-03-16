#!/bin/bash
# Run usage-alert test suite
set -e
echo "Running usage-alert unit tests..."
npx vitest run tests/usage-alert_unit*
echo "Running usage-alert integration tests..."
npx vitest run tests/usage-alert_integration*
echo "All usage-alert tests passed"
