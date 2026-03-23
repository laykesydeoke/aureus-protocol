#!/bin/bash
# Deploy backup-svc module to testnet
set -e
echo "Checking backup-svc contract..."
clarinet check
echo "Deploying backup-svc..."
clarinet deploy --testnet
echo "backup-svc deployed successfully"
