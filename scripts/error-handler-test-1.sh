#!/bin/bash
# Run error-handler test suite
set -e
echo "Running error-handler unit tests..."
npx vitest run tests/error-handler_unit*
echo "Running error-handler integration tests..."
npx vitest run tests/error-handler_integration*
echo "All error-handler tests passed"
