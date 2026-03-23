#!/bin/bash
# Run locale-fmt test suite
set -e
echo "Running locale-fmt unit tests..."
npx vitest run tests/locale-fmt_unit*
echo "Running locale-fmt integration tests..."
npx vitest run tests/locale-fmt_integration*
echo "All locale-fmt tests passed"
