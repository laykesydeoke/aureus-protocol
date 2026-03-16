#!/bin/bash
# Deploy invoice-gen module to testnet
set -e
echo "Checking invoice-gen contract..."
clarinet check
echo "Deploying invoice-gen..."
clarinet deploy --testnet
echo "invoice-gen deployed successfully"
