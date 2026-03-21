#!/bin/bash
# Deploy asset-pipe module to testnet
set -e
echo "Checking asset-pipe contract..."
clarinet check
echo "Deploying asset-pipe..."
clarinet deploy --testnet
echo "asset-pipe deployed successfully"
