#!/bin/bash
# Run cdn-config test suite
set -e
echo "Running cdn-config unit tests..."
npx vitest run tests/cdn-config_unit*
echo "Running cdn-config integration tests..."
npx vitest run tests/cdn-config_integration*
echo "All cdn-config tests passed"
