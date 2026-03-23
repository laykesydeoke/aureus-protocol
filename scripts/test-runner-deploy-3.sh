#!/bin/bash
# Deploy test-runner module to testnet
set -e
echo "Checking test-runner contract..."
clarinet check
echo "Deploying test-runner..."
clarinet deploy --testnet
echo "test-runner deployed successfully"
