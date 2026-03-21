#!/bin/bash
# Run asset-pipe test suite
set -e
echo "Running asset-pipe unit tests..."
npx vitest run tests/asset-pipe_unit*
echo "Running asset-pipe integration tests..."
npx vitest run tests/asset-pipe_integration*
echo "All asset-pipe tests passed"
