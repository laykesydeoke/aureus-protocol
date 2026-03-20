#!/bin/bash
# Deploy transform-svc module to testnet
set -e
echo "Checking transform-svc contract..."
clarinet check
echo "Deploying transform-svc..."
clarinet deploy --testnet
echo "transform-svc deployed successfully"
