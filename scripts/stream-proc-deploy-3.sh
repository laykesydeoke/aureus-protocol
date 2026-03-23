#!/bin/bash
# Deploy stream-proc module to testnet
set -e
echo "Checking stream-proc contract..."
clarinet check
echo "Deploying stream-proc..."
clarinet deploy --testnet
echo "stream-proc deployed successfully"
