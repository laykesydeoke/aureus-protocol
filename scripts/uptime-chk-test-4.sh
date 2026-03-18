#!/bin/bash
# Run uptime-chk test suite
set -e
echo "Running uptime-chk unit tests..."
npx vitest run tests/uptime-chk_unit*
echo "Running uptime-chk integration tests..."
npx vitest run tests/uptime-chk_integration*
echo "All uptime-chk tests passed"
