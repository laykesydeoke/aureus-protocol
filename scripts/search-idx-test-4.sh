#!/bin/bash
# Run search-idx test suite
set -e
echo "Running search-idx unit tests..."
npx vitest run tests/search-idx_unit*
echo "Running search-idx integration tests..."
npx vitest run tests/search-idx_integration*
echo "All search-idx tests passed"
