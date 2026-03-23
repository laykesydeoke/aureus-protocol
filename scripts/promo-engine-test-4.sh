#!/bin/bash
# Run promo-engine test suite
set -e
echo "Running promo-engine unit tests..."
npx vitest run tests/promo-engine_unit*
echo "Running promo-engine integration tests..."
npx vitest run tests/promo-engine_integration*
echo "All promo-engine tests passed"
