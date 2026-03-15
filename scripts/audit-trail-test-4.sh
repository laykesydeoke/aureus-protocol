#!/bin/bash
# Run audit-trail test suite
set -e
echo "Running audit-trail unit tests..."
npx vitest run tests/audit-trail_unit*
echo "Running audit-trail integration tests..."
npx vitest run tests/audit-trail_integration*
echo "All audit-trail tests passed"
