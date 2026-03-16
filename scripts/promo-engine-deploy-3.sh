#!/bin/bash
# Deploy promo-engine module to testnet
set -e
echo "Checking promo-engine contract..."
clarinet check
echo "Deploying promo-engine..."
clarinet deploy --testnet
echo "promo-engine deployed successfully"
