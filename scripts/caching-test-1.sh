#!/bin/bash
# Run caching test suite
set -e
echo "Running caching unit tests..."
npx vitest run tests/caching_unit*
echo "Running caching integration tests..."
npx vitest run tests/caching_integration*
echo "All caching tests passed"
