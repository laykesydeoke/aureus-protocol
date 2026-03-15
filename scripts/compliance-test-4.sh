#!/bin/bash
# Run compliance test suite
set -e
echo "Running compliance unit tests..."
npx vitest run tests/compliance_unit*
echo "Running compliance integration tests..."
npx vitest run tests/compliance_integration*
echo "All compliance tests passed"
