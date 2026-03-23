#!/bin/bash
# Run kms-proxy test suite
set -e
echo "Running kms-proxy unit tests..."
npx vitest run tests/kms-proxy_unit*
echo "Running kms-proxy integration tests..."
npx vitest run tests/kms-proxy_integration*
echo "All kms-proxy tests passed"
