#!/bin/bash
# Run receipt-log test suite
set -e
echo "Running receipt-log unit tests..."
npx vitest run tests/receipt-log_unit*
echo "Running receipt-log integration tests..."
npx vitest run tests/receipt-log_integration*
echo "All receipt-log tests passed"
