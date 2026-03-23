#!/bin/bash
# Run load-bal test suite
set -e
echo "Running load-bal unit tests..."
npx vitest run tests/load-bal_unit*
echo "Running load-bal integration tests..."
npx vitest run tests/load-bal_integration*
echo "All load-bal tests passed"
