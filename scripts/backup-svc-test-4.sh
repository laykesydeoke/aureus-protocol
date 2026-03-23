#!/bin/bash
# Run backup-svc test suite
set -e
echo "Running backup-svc unit tests..."
npx vitest run tests/backup-svc_unit*
echo "Running backup-svc integration tests..."
npx vitest run tests/backup-svc_integration*
echo "All backup-svc tests passed"
