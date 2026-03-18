#!/bin/bash
# Deploy export-svc module to testnet
set -e
echo "Checking export-svc contract..."
clarinet check
echo "Deploying export-svc..."
clarinet deploy --testnet
echo "export-svc deployed successfully"
