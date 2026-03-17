#!/bin/bash
# Run circuit-brk test suite
set -e
echo "Running circuit-brk unit tests..."
npx vitest run tests/circuit-brk_unit*
echo "Running circuit-brk integration tests..."
npx vitest run tests/circuit-brk_integration*
echo "All circuit-brk tests passed"
