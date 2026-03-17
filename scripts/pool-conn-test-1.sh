#!/bin/bash
# Run pool-conn test suite
set -e
echo "Running pool-conn unit tests..."
npx vitest run tests/pool-conn_unit*
echo "Running pool-conn integration tests..."
npx vitest run tests/pool-conn_integration*
echo "All pool-conn tests passed"
