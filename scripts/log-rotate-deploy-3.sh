#!/bin/bash
# Deploy log-rotate module to testnet
set -e
echo "Checking log-rotate contract..."
clarinet check
echo "Deploying log-rotate..."
clarinet deploy --testnet
echo "log-rotate deployed successfully"
