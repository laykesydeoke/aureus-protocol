#!/bin/bash
# Deploy seed-data module to testnet
set -e
echo "Checking seed-data contract..."
clarinet check
echo "Deploying seed-data..."
clarinet deploy --testnet
echo "seed-data deployed successfully"
