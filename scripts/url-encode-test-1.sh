#!/bin/bash
# Run url-encode test suite
set -e
echo "Running url-encode unit tests..."
npx vitest run tests/url-encode_unit*
echo "Running url-encode integration tests..."
npx vitest run tests/url-encode_integration*
echo "All url-encode tests passed"
