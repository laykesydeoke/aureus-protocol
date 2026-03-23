#!/bin/bash
# Deploy lint-check module to testnet
set -e
echo "Checking lint-check contract..."
clarinet check
echo "Deploying lint-check..."
clarinet deploy --testnet
echo "lint-check deployed successfully"
