#!/bin/bash

# Simple deployment script for GitHub Pages
# This script builds the app and pushes to gh-pages branch

echo "🚀 Starting deployment to GitHub Pages..."

# Build the app
echo "📦 Building the app..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

# Create a temporary directory for deployment
echo "📁 Preparing deployment files..."
rm -rf deploy-temp
mkdir deploy-temp
cp -r build/* deploy-temp/

# Initialize git in deploy directory
cd deploy-temp
git init
git add .
git commit -m "Deploy to GitHub Pages - $(date)"

# Add the gh-pages branch as a remote
git remote add origin https://github.com/anticorn/business-website.git

# Push to gh-pages branch
echo "🌐 Pushing to gh-pages branch..."
git push -f origin HEAD:gh-pages

if [ $? -eq 0 ]; then
    echo "✅ Successfully deployed to GitHub Pages!"
    echo "🌍 Your site should be available at: https://anticorn.github.io/business-website"
else
    echo "❌ Deployment failed!"
    exit 1
fi

# Clean up
cd ..
rm -rf deploy-temp

echo "🎉 Deployment complete!"
