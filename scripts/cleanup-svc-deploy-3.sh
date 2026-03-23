#!/bin/bash
# Deploy cleanup-svc module to testnet
set -e
echo "Checking cleanup-svc contract..."
clarinet check
echo "Deploying cleanup-svc..."
clarinet deploy --testnet
echo "cleanup-svc deployed successfully"
