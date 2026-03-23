#!/bin/bash
# Run l10n-mgr test suite
set -e
echo "Running l10n-mgr unit tests..."
npx vitest run tests/l10n-mgr_unit*
echo "Running l10n-mgr integration tests..."
npx vitest run tests/l10n-mgr_integration*
echo "All l10n-mgr tests passed"
