#!/bin/bash
# Run schema-mig test suite
set -e
echo "Running schema-mig unit tests..."
npx vitest run tests/schema-mig_unit*
echo "Running schema-mig integration tests..."
npx vitest run tests/schema-mig_integration*
echo "All schema-mig tests passed"
