#!/bin/bash
# Run invoice-gen test suite
set -e
echo "Running invoice-gen unit tests..."
npx vitest run tests/invoice-gen_unit*
echo "Running invoice-gen integration tests..."
npx vitest run tests/invoice-gen_integration*
echo "All invoice-gen tests passed"
