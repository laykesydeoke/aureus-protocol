#!/bin/bash
# Run alert-rule test suite
set -e
echo "Running alert-rule unit tests..."
npx vitest run tests/alert-rule_unit*
echo "Running alert-rule integration tests..."
npx vitest run tests/alert-rule_integration*
echo "All alert-rule tests passed"
