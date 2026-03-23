#!/bin/bash
# Run vault-svc test suite
set -e
echo "Running vault-svc unit tests..."
npx vitest run tests/vault-svc_unit*
echo "Running vault-svc integration tests..."
npx vitest run tests/vault-svc_integration*
echo "All vault-svc tests passed"
