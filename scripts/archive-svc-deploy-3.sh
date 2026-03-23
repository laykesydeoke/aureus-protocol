#!/bin/bash
# Deploy archive-svc module to testnet
set -e
echo "Checking archive-svc contract..."
clarinet check
echo "Deploying archive-svc..."
clarinet deploy --testnet
echo "archive-svc deployed successfully"
