#!/bin/bash
# Run date-parse test suite
set -e
echo "Running date-parse unit tests..."
npx vitest run tests/date-parse_unit*
echo "Running date-parse integration tests..."
npx vitest run tests/date-parse_integration*
echo "All date-parse tests passed"
