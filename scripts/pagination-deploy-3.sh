#!/bin/bash
# Deploy pagination module to testnet
set -e
echo "Checking pagination contract..."
clarinet check
echo "Deploying pagination..."
clarinet deploy --testnet
echo "pagination deployed successfully"
