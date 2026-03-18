#!/bin/bash
# Run metric-agg test suite
set -e
echo "Running metric-agg unit tests..."
npx vitest run tests/metric-agg_unit*
echo "Running metric-agg integration tests..."
npx vitest run tests/metric-agg_integration*
echo "All metric-agg tests passed"
