#!/bin/bash
# Run validate-ci test suite
set -e
echo "Running validate-ci unit tests..."
npx vitest run tests/validate-ci_unit*
echo "Running validate-ci integration tests..."
npx vitest run tests/validate-ci_integration*
echo "All validate-ci tests passed"
