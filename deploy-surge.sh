#!/bin/bash

# Quick Deploy Script for Global Paslanmaz
# Deploys to Surge.sh for instant client preview

echo "🚀 Global Paslanmaz - Quick Deploy Script"
echo "=========================================="
echo ""

# Check if surge is installed
if ! command -v surge &> /dev/null
then
    echo "📦 Installing Surge.sh..."
    npm install -g surge
fi

echo "🌐 Deploying website..."
echo ""

# Deploy to surge
cd "$(dirname "$0")"
surge . global-paslanmaz-preview.surge.sh

echo ""
echo "✅ Deployment complete!"
echo ""
echo "🔗 Your website URL:"
echo "   https://global-paslanmaz-preview.surge.sh"
echo ""
echo "📱 Send this link to your client in Turkey!"
echo ""

