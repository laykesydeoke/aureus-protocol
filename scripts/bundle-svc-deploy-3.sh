#!/bin/bash
# Deploy bundle-svc module to testnet
set -e
echo "Checking bundle-svc contract..."
clarinet check
echo "Deploying bundle-svc..."
clarinet deploy --testnet
echo "bundle-svc deployed successfully"
