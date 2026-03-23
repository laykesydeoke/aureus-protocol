#!/bin/bash
# Deploy compact-svc module to testnet
set -e
echo "Checking compact-svc contract..."
clarinet check
echo "Deploying compact-svc..."
clarinet deploy --testnet
echo "compact-svc deployed successfully"
