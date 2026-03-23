#!/bin/bash
# Run rbac-ctrl test suite
set -e
echo "Running rbac-ctrl unit tests..."
npx vitest run tests/rbac-ctrl_unit*
echo "Running rbac-ctrl integration tests..."
npx vitest run tests/rbac-ctrl_integration*
echo "All rbac-ctrl tests passed"
