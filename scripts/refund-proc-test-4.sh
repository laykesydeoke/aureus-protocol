#!/bin/bash
# Run refund-proc test suite
set -e
echo "Running refund-proc unit tests..."
npx vitest run tests/refund-proc_unit*
echo "Running refund-proc integration tests..."
npx vitest run tests/refund-proc_integration*
echo "All refund-proc tests passed"
