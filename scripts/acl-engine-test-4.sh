#!/bin/bash
# Run acl-engine test suite
set -e
echo "Running acl-engine unit tests..."
npx vitest run tests/acl-engine_unit*
echo "Running acl-engine integration tests..."
npx vitest run tests/acl-engine_integration*
echo "All acl-engine tests passed"
