#!/bin/bash
# Deploy tls-config module to testnet
set -e
echo "Checking tls-config contract..."
clarinet check
echo "Deploying tls-config..."
clarinet deploy --testnet
echo "tls-config deployed successfully"
