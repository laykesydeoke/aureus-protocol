#!/bin/bash
# Run pre-commit test suite
set -e
echo "Running pre-commit unit tests..."
npx vitest run tests/pre-commit_unit*
echo "Running pre-commit integration tests..."
npx vitest run tests/pre-commit_integration*
echo "All pre-commit tests passed"
