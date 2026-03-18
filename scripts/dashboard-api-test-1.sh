#!/bin/bash
# Run dashboard-api test suite
set -e
echo "Running dashboard-api unit tests..."
npx vitest run tests/dashboard-api_unit*
echo "Running dashboard-api integration tests..."
npx vitest run tests/dashboard-api_integration*
echo "All dashboard-api tests passed"
