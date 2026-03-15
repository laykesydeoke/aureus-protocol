#!/bin/bash
# Run queue-sys test suite
set -e
echo "Running queue-sys unit tests..."
npx vitest run tests/queue-sys_unit*
echo "Running queue-sys integration tests..."
npx vitest run tests/queue-sys_integration*
echo "All queue-sys tests passed"
