#!/bin/bash
# Run xss-guard test suite
set -e
echo "Running xss-guard unit tests..."
npx vitest run tests/xss-guard_unit*
echo "Running xss-guard integration tests..."
npx vitest run tests/xss-guard_integration*
echo "All xss-guard tests passed"
