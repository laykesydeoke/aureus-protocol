#!/bin/bash
# Run log-rotate test suite
set -e
echo "Running log-rotate unit tests..."
npx vitest run tests/log-rotate_unit*
echo "Running log-rotate integration tests..."
npx vitest run tests/log-rotate_integration*
echo "All log-rotate tests passed"
