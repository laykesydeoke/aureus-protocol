#!/bin/bash
# Deploy carrier-api module to testnet
set -e
echo "Checking carrier-api contract..."
clarinet check
echo "Deploying carrier-api..."
clarinet deploy --testnet
echo "carrier-api deployed successfully"
