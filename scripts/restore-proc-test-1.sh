#!/bin/bash
# Run restore-proc test suite
set -e
echo "Running restore-proc unit tests..."
npx vitest run tests/restore-proc_unit*
echo "Running restore-proc integration tests..."
npx vitest run tests/restore-proc_integration*
echo "All restore-proc tests passed"
