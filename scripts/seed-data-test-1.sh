#!/bin/bash
# Run seed-data test suite
set -e
echo "Running seed-data unit tests..."
npx vitest run tests/seed-data_unit*
echo "Running seed-data integration tests..."
npx vitest run tests/seed-data_integration*
echo "All seed-data tests passed"
