#!/bin/bash
# Run eager-fetch test suite
set -e
echo "Running eager-fetch unit tests..."
npx vitest run tests/eager-fetch_unit*
echo "Running eager-fetch integration tests..."
npx vitest run tests/eager-fetch_integration*
echo "All eager-fetch tests passed"
