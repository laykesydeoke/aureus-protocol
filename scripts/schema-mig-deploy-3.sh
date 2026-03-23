#!/bin/bash
# Deploy schema-mig module to testnet
set -e
echo "Checking schema-mig contract..."
clarinet check
echo "Deploying schema-mig..."
clarinet deploy --testnet
echo "schema-mig deployed successfully"
