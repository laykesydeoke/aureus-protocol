#!/bin/bash
# Run cert-mgr test suite
set -e
echo "Running cert-mgr unit tests..."
npx vitest run tests/cert-mgr_unit*
echo "Running cert-mgr integration tests..."
npx vitest run tests/cert-mgr_integration*
echo "All cert-mgr tests passed"
