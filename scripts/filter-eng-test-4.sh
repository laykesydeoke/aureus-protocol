#!/bin/bash
# Run filter-eng test suite
set -e
echo "Running filter-eng unit tests..."
npx vitest run tests/filter-eng_unit*
echo "Running filter-eng integration tests..."
npx vitest run tests/filter-eng_integration*
echo "All filter-eng tests passed"
