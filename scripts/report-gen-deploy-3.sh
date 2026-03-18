#!/bin/bash
# Deploy report-gen module to testnet
set -e
echo "Checking report-gen contract..."
clarinet check
echo "Deploying report-gen..."
clarinet deploy --testnet
echo "report-gen deployed successfully"
