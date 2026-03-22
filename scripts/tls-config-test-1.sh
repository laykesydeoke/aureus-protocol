#!/bin/bash
# Run tls-config test suite
set -e
echo "Running tls-config unit tests..."
npx vitest run tests/tls-config_unit*
echo "Running tls-config integration tests..."
npx vitest run tests/tls-config_integration*
echo "All tls-config tests passed"
