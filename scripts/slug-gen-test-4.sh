#!/bin/bash
# Run slug-gen test suite
set -e
echo "Running slug-gen unit tests..."
npx vitest run tests/slug-gen_unit*
echo "Running slug-gen integration tests..."
npx vitest run tests/slug-gen_integration*
echo "All slug-gen tests passed"
