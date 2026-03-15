#!/bin/bash
# Run webhook-mgr test suite
set -e
echo "Running webhook-mgr unit tests..."
npx vitest run tests/webhook-mgr_unit*
echo "Running webhook-mgr integration tests..."
npx vitest run tests/webhook-mgr_integration*
echo "All webhook-mgr tests passed"
