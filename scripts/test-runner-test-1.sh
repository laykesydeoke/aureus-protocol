#!/bin/bash
# Run test-runner test suite
set -e
echo "Running test-runner unit tests..."
npx vitest run tests/test-runner_unit*
echo "Running test-runner integration tests..."
npx vitest run tests/test-runner_integration*
echo "All test-runner tests passed"
