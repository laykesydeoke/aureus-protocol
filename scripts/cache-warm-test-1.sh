#!/bin/bash
# Run cache-warm test suite
set -e
echo "Running cache-warm unit tests..."
npx vitest run tests/cache-warm_unit*
echo "Running cache-warm integration tests..."
npx vitest run tests/cache-warm_integration*
echo "All cache-warm tests passed"
