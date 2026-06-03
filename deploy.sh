#!/bin/bash

# Production deployment helper for Addie Jones Portfolio.

set -euo pipefail

echo "🚀 Running production deployment checks..."

if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

echo "📦 Installing dependencies..."
npm ci

echo "🔍 Running ESLint..."
npm run lint

echo "🏗️ Building project..."
npm run build

echo "🩺 Checking live site..."
npm run healthcheck

echo "🌐 Deploying to Vercel production..."
vercel deploy --prod

echo "🩺 Verifying production after deploy..."
npm run healthcheck

echo "✅ Production deployment completed successfully."
echo "Live site: https://addieelizjones.com/"
