#!/bin/bash
# Run event-sys test suite
set -e
echo "Running event-sys unit tests..."
npx vitest run tests/event-sys_unit*
echo "Running event-sys integration tests..."
npx vitest run tests/event-sys_integration*
echo "All event-sys tests passed"
