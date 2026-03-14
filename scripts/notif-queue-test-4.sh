#!/bin/bash
# Run notif-queue test suite
set -e
echo "Running notif-queue unit tests..."
npx vitest run tests/notif-queue_unit*
echo "Running notif-queue integration tests..."
npx vitest run tests/notif-queue_integration*
echo "All notif-queue tests passed"
