#!/bin/bash
# Run trace-sys test suite
set -e
echo "Running trace-sys unit tests..."
npx vitest run tests/trace-sys_unit*
echo "Running trace-sys integration tests..."
npx vitest run tests/trace-sys_integration*
echo "All trace-sys tests passed"
