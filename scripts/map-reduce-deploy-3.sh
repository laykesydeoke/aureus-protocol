#!/bin/bash
# Deploy map-reduce module to testnet
set -e
echo "Checking map-reduce contract..."
clarinet check
echo "Deploying map-reduce..."
clarinet deploy --testnet
echo "map-reduce deployed successfully"
