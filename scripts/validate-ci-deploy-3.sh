#!/bin/bash
# Deploy validate-ci module to testnet
set -e
echo "Checking validate-ci contract..."
clarinet check
echo "Deploying validate-ci..."
clarinet deploy --testnet
echo "validate-ci deployed successfully"
