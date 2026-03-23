#!/bin/bash
# Deploy locale-fmt module to testnet
set -e
echo "Checking locale-fmt contract..."
clarinet check
echo "Deploying locale-fmt..."
clarinet deploy --testnet
echo "locale-fmt deployed successfully"
