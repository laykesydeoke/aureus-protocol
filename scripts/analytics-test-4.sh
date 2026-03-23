#!/bin/bash
# Run analytics test suite
set -e
echo "Running analytics unit tests..."
npx vitest run tests/analytics_unit*
echo "Running analytics integration tests..."
npx vitest run tests/analytics_integration*
echo "All analytics tests passed"
