#!/bin/bash
# Deploy date-parse module to testnet
set -e
echo "Checking date-parse contract..."
clarinet check
echo "Deploying date-parse..."
clarinet deploy --testnet
echo "date-parse deployed successfully"
