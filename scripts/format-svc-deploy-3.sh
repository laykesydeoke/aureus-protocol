#!/bin/bash
# Deploy format-svc module to testnet
set -e
echo "Checking format-svc contract..."
clarinet check
echo "Deploying format-svc..."
clarinet deploy --testnet
echo "format-svc deployed successfully"
