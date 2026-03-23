#!/bin/bash
# Run pagination test suite
set -e
echo "Running pagination unit tests..."
npx vitest run tests/pagination_unit*
echo "Running pagination integration tests..."
npx vitest run tests/pagination_integration*
echo "All pagination tests passed"
