#!/bin/bash
# Run csp-header test suite
set -e
echo "Running csp-header unit tests..."
npx vitest run tests/csp-header_unit*
echo "Running csp-header integration tests..."
npx vitest run tests/csp-header_integration*
echo "All csp-header tests passed"
