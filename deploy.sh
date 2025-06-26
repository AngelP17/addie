#!/bin/bash

# Deploy script for Addie Jones Portfolio
# This script builds the project and deploys it to GitHub Pages

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running ESLint..."
npm run lint

# Build the project
echo "🏗️ Building project..."
npm run build

# Check if build was successful
if [ ! -d "dist" ]; then
    echo "❌ Error: Build failed. dist directory not found."
    exit 1
fi

echo "✅ Build completed successfully!"

# Deploy to GitHub Pages using gh-pages package
echo "🌐 Deploying to GitHub Pages..."

# Check if gh-pages is installed
if ! npm list gh-pages > /dev/null 2>&1; then
    echo "📦 Installing gh-pages..."
    npm install --save-dev gh-pages
fi

# Add deploy script to package.json if it doesn't exist
if ! grep -q '"deploy"' package.json; then
    echo "📝 Adding deploy script to package.json..."
    # This is a simple way to add the script - you might want to do this manually
    echo "Please add the following script to your package.json:"
    echo '"deploy": "gh-pages -d dist"'
fi

# Deploy
npx gh-pages -d dist

echo "🎉 Deployment completed!"
echo "Your site should be available at: https://angelp17.github.io/addie/"
echo ""
echo "Note: It may take a few minutes for changes to appear." 