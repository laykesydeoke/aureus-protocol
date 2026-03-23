#!/bin/bash
# Deploy slug-gen module to testnet
set -e
echo "Checking slug-gen contract..."
clarinet check
echo "Deploying slug-gen..."
clarinet deploy --testnet
echo "slug-gen deployed successfully"
