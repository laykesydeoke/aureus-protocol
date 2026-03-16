#!/bin/bash
# Run rollover-mgr test suite
set -e
echo "Running rollover-mgr unit tests..."
npx vitest run tests/rollover-mgr_unit*
echo "Running rollover-mgr integration tests..."
npx vitest run tests/rollover-mgr_integration*
echo "All rollover-mgr tests passed"
