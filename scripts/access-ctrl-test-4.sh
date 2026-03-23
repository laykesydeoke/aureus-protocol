#!/bin/bash
# Run access-ctrl test suite
set -e
echo "Running access-ctrl unit tests..."
npx vitest run tests/access-ctrl_unit*
echo "Running access-ctrl integration tests..."
npx vitest run tests/access-ctrl_integration*
echo "All access-ctrl tests passed"
