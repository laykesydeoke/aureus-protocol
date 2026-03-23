#!/bin/bash
# Run carrier-api test suite
set -e
echo "Running carrier-api unit tests..."
npx vitest run tests/carrier-api_unit*
echo "Running carrier-api integration tests..."
npx vitest run tests/carrier-api_integration*
echo "All carrier-api tests passed"
