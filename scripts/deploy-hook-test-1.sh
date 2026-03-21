#!/bin/bash
# Run deploy-hook test suite
set -e
echo "Running deploy-hook unit tests..."
npx vitest run tests/deploy-hook_unit*
echo "Running deploy-hook integration tests..."
npx vitest run tests/deploy-hook_integration*
echo "All deploy-hook tests passed"
