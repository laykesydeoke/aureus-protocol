#!/bin/bash
# Deploy metric-agg module to testnet
set -e
echo "Checking metric-agg contract..."
clarinet check
echo "Deploying metric-agg..."
clarinet deploy --testnet
echo "metric-agg deployed successfully"
