#!/bin/bash
# Run text-sanitize test suite
set -e
echo "Running text-sanitize unit tests..."
npx vitest run tests/text-sanitize_unit*
echo "Running text-sanitize integration tests..."
npx vitest run tests/text-sanitize_integration*
echo "All text-sanitize tests passed"
