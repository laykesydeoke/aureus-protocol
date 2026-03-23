#!/bin/bash
# Run csrf-token test suite
set -e
echo "Running csrf-token unit tests..."
npx vitest run tests/csrf-token_unit*
echo "Running csrf-token integration tests..."
npx vitest run tests/csrf-token_integration*
echo "All csrf-token tests passed"
