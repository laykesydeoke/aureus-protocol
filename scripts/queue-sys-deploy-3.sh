#!/bin/bash
# Deploy queue-sys module to testnet
set -e
echo "Checking queue-sys contract..."
clarinet check
echo "Deploying queue-sys..."
clarinet deploy --testnet
echo "queue-sys deployed successfully"
