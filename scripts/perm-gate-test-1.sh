#!/bin/bash
# Run perm-gate test suite
set -e
echo "Running perm-gate unit tests..."
npx vitest run tests/perm-gate_unit*
echo "Running perm-gate integration tests..."
npx vitest run tests/perm-gate_integration*
echo "All perm-gate tests passed"
