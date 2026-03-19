#!/bin/bash
# Deploy restore-proc module to testnet
set -e
echo "Checking restore-proc contract..."
clarinet check
echo "Deploying restore-proc..."
clarinet deploy --testnet
echo "restore-proc deployed successfully"
