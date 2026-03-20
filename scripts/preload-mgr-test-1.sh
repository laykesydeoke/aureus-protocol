#!/bin/bash
# Run preload-mgr test suite
set -e
echo "Running preload-mgr unit tests..."
npx vitest run tests/preload-mgr_unit*
echo "Running preload-mgr integration tests..."
npx vitest run tests/preload-mgr_integration*
echo "All preload-mgr tests passed"
