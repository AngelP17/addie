#!/bin/bash

# Local deployment checks for Addie Jones Portfolio.
# Production publishing is handled by .github/workflows/deploy.yml on pushes to main
# or by manually running the "Deploy site" workflow in GitHub Actions.

set -euo pipefail

echo "🚀 Running local deployment checks..."

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

if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

if [ ! -f "dist/CNAME" ]; then
    echo "❌ Error: dist/CNAME missing. GitHub Pages custom domain would not be preserved."
    exit 1
fi

if ! grep -qx "addieelizjones.com" dist/CNAME; then
    echo "❌ Error: dist/CNAME must contain addieelizjones.com."
    exit 1
fi

echo "✅ Local deployment checks completed successfully."
echo "Publish by pushing to main or running the 'Deploy site' workflow in GitHub Actions."
echo "Live site: https://addieelizjones.com/"
