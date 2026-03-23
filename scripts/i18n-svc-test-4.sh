#!/bin/bash
# Run i18n-svc test suite
set -e
echo "Running i18n-svc unit tests..."
npx vitest run tests/i18n-svc_unit*
echo "Running i18n-svc integration tests..."
npx vitest run tests/i18n-svc_integration*
echo "All i18n-svc tests passed"
