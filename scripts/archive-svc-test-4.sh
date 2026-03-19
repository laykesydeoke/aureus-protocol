#!/bin/bash
# Run archive-svc test suite
set -e
echo "Running archive-svc unit tests..."
npx vitest run tests/archive-svc_unit*
echo "Running archive-svc integration tests..."
npx vitest run tests/archive-svc_integration*
echo "All archive-svc tests passed"
