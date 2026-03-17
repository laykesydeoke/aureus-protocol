#!/bin/bash
# Run session-mgr test suite
set -e
echo "Running session-mgr unit tests..."
npx vitest run tests/session-mgr_unit*
echo "Running session-mgr integration tests..."
npx vitest run tests/session-mgr_integration*
echo "All session-mgr tests passed"
