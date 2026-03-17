#!/bin/bash
# Run token-auth test suite
set -e
echo "Running token-auth unit tests..."
npx vitest run tests/token-auth_unit*
echo "Running token-auth integration tests..."
npx vitest run tests/token-auth_integration*
echo "All token-auth tests passed"
