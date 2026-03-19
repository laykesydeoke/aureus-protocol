#!/bin/bash
# Deploy purge-job module to testnet
set -e
echo "Checking purge-job contract..."
clarinet check
echo "Deploying purge-job..."
clarinet deploy --testnet
echo "purge-job deployed successfully"
