#!/bin/bash
# Run encrypt-mod test suite
set -e
echo "Running encrypt-mod unit tests..."
npx vitest run tests/encrypt-mod_unit*
echo "Running encrypt-mod integration tests..."
npx vitest run tests/encrypt-mod_integration*
echo "All encrypt-mod tests passed"
