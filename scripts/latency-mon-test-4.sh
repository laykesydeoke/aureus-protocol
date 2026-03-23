#!/bin/bash
# Run latency-mon test suite
set -e
echo "Running latency-mon unit tests..."
npx vitest run tests/latency-mon_unit*
echo "Running latency-mon integration tests..."
npx vitest run tests/latency-mon_integration*
echo "All latency-mon tests passed"
