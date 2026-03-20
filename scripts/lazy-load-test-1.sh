#!/bin/bash
# Run lazy-load test suite
set -e
echo "Running lazy-load unit tests..."
npx vitest run tests/lazy-load_unit*
echo "Running lazy-load integration tests..."
npx vitest run tests/lazy-load_integration*
echo "All lazy-load tests passed"
