#!/bin/bash
# Deploy event-sys module to testnet
set -e
echo "Checking event-sys contract..."
clarinet check
echo "Deploying event-sys..."
clarinet deploy --testnet
echo "event-sys deployed successfully"
