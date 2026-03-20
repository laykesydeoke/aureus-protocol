#!/bin/bash
# Run stream-proc test suite
set -e
echo "Running stream-proc unit tests..."
npx vitest run tests/stream-proc_unit*
echo "Running stream-proc integration tests..."
npx vitest run tests/stream-proc_integration*
echo "All stream-proc tests passed"
