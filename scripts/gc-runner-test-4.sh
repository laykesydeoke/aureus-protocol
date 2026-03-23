#!/bin/bash
# Run gc-runner test suite
set -e
echo "Running gc-runner unit tests..."
npx vitest run tests/gc-runner_unit*
echo "Running gc-runner integration tests..."
npx vitest run tests/gc-runner_integration*
echo "All gc-runner tests passed"
