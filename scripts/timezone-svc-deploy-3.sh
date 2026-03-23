#!/bin/bash
# Deploy timezone-svc module to testnet
set -e
echo "Checking timezone-svc contract..."
clarinet check
echo "Deploying timezone-svc..."
clarinet deploy --testnet
echo "timezone-svc deployed successfully"
