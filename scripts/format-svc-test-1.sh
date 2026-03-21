#!/bin/bash
# Run format-svc test suite
set -e
echo "Running format-svc unit tests..."
npx vitest run tests/format-svc_unit*
echo "Running format-svc integration tests..."
npx vitest run tests/format-svc_integration*
echo "All format-svc tests passed"
