#!/bin/bash
# Run build-opt test suite
set -e
echo "Running build-opt unit tests..."
npx vitest run tests/build-opt_unit*
echo "Running build-opt integration tests..."
npx vitest run tests/build-opt_integration*
echo "All build-opt tests passed"
