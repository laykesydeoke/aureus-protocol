#!/bin/bash
# Run data-valid test suite
set -e
echo "Running data-valid unit tests..."
npx vitest run tests/data-valid_unit*
echo "Running data-valid integration tests..."
npx vitest run tests/data-valid_integration*
echo "All data-valid tests passed"
