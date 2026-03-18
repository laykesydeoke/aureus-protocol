#!/bin/bash
# Deploy dashboard-api module to testnet
set -e
echo "Checking dashboard-api contract..."
clarinet check
echo "Deploying dashboard-api..."
clarinet deploy --testnet
echo "dashboard-api deployed successfully"
