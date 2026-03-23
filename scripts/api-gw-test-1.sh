#!/bin/bash
# Run api-gw test suite
set -e
echo "Running api-gw unit tests..."
npx vitest run tests/api-gw_unit*
echo "Running api-gw integration tests..."
npx vitest run tests/api-gw_integration*
echo "All api-gw tests passed"
