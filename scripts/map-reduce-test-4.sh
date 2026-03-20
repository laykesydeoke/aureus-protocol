#!/bin/bash
# Run map-reduce test suite
set -e
echo "Running map-reduce unit tests..."
npx vitest run tests/map-reduce_unit*
echo "Running map-reduce integration tests..."
npx vitest run tests/map-reduce_integration*
echo "All map-reduce tests passed"
