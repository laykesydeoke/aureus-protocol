#!/bin/bash
# Deploy text-sanitize module to testnet
set -e
echo "Checking text-sanitize contract..."
clarinet check
echo "Deploying text-sanitize..."
clarinet deploy --testnet
echo "text-sanitize deployed successfully"
