#!/bin/bash
# Run snapshot-mgr test suite
set -e
echo "Running snapshot-mgr unit tests..."
npx vitest run tests/snapshot-mgr_unit*
echo "Running snapshot-mgr integration tests..."
npx vitest run tests/snapshot-mgr_integration*
echo "All snapshot-mgr tests passed"
