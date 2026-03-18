#!/bin/bash
# Run report-gen test suite
set -e
echo "Running report-gen unit tests..."
npx vitest run tests/report-gen_unit*
echo "Running report-gen integration tests..."
npx vitest run tests/report-gen_integration*
echo "All report-gen tests passed"
