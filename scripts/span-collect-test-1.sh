#!/bin/bash
# Run span-collect test suite
set -e
echo "Running span-collect unit tests..."
npx vitest run tests/span-collect_unit*
echo "Running span-collect integration tests..."
npx vitest run tests/span-collect_integration*
echo "All span-collect tests passed"
