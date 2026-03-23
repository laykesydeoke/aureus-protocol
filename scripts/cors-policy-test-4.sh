#!/bin/bash
# Run cors-policy test suite
set -e
echo "Running cors-policy unit tests..."
npx vitest run tests/cors-policy_unit*
echo "Running cors-policy integration tests..."
npx vitest run tests/cors-policy_integration*
echo "All cors-policy tests passed"
