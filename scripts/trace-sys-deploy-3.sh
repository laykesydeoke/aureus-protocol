#!/bin/bash
# Deploy trace-sys module to testnet
set -e
echo "Checking trace-sys contract..."
clarinet check
echo "Deploying trace-sys..."
clarinet deploy --testnet
echo "trace-sys deployed successfully"
