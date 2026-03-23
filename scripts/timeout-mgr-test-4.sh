#!/bin/bash
# Run timeout-mgr test suite
set -e
echo "Running timeout-mgr unit tests..."
npx vitest run tests/timeout-mgr_unit*
echo "Running timeout-mgr integration tests..."
npx vitest run tests/timeout-mgr_integration*
echo "All timeout-mgr tests passed"
