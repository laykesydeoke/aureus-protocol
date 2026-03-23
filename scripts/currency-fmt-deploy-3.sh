#!/bin/bash
# Deploy currency-fmt module to testnet
set -e
echo "Checking currency-fmt contract..."
clarinet check
echo "Deploying currency-fmt..."
clarinet deploy --testnet
echo "currency-fmt deployed successfully"
