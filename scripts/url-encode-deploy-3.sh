#!/bin/bash
# Deploy url-encode module to testnet
set -e
echo "Checking url-encode contract..."
clarinet check
echo "Deploying url-encode..."
clarinet deploy --testnet
echo "url-encode deployed successfully"
