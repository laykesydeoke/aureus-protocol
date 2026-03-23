#!/bin/bash
# Deploy prefetch-svc module to testnet
set -e
echo "Checking prefetch-svc contract..."
clarinet check
echo "Deploying prefetch-svc..."
clarinet deploy --testnet
echo "prefetch-svc deployed successfully"
