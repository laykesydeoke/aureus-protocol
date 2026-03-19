#!/bin/bash
# Run purge-job test suite
set -e
echo "Running purge-job unit tests..."
npx vitest run tests/purge-job_unit*
echo "Running purge-job integration tests..."
npx vitest run tests/purge-job_integration*
echo "All purge-job tests passed"
