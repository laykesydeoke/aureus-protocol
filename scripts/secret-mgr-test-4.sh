#!/bin/bash
# Run secret-mgr test suite
set -e
echo "Running secret-mgr unit tests..."
npx vitest run tests/secret-mgr_unit*
echo "Running secret-mgr integration tests..."
npx vitest run tests/secret-mgr_integration*
echo "All secret-mgr tests passed"
