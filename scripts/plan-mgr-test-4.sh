#!/bin/bash
# Run plan-mgr test suite
set -e
echo "Running plan-mgr unit tests..."
npx vitest run tests/plan-mgr_unit*
echo "Running plan-mgr integration tests..."
npx vitest run tests/plan-mgr_integration*
echo "All plan-mgr tests passed"
