#!/bin/bash
# Deploy pre-commit module to testnet
set -e
echo "Checking pre-commit contract..."
clarinet check
echo "Deploying pre-commit..."
clarinet deploy --testnet
echo "pre-commit deployed successfully"
