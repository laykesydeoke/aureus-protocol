#!/bin/bash
# Run env-config test suite
set -e
echo "Running env-config unit tests..."
npx vitest run tests/env-config_unit*
echo "Running env-config integration tests..."
npx vitest run tests/env-config_integration*
echo "All env-config tests passed"
