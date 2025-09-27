# GitHub Pages Setup Guide

## The Issue
GitHub Actions is having permission issues pushing to the repository. This is a common problem with GitHub's security model.

## Solutions

### Option 1: Manual Deployment (Recommended)
Run this command locally to deploy:

```bash
# Make the script executable
chmod +x deploy.sh

# Run the deployment
./deploy.sh
```

This will:
1. Build your React app
2. Create a gh-pages branch
3. Push the built files to GitHub Pages

### Option 2: Enable GitHub Pages in Repository Settings
1. Go to your repository: https://github.com/anticorn/business-website
2. Click **Settings** (top menu)
3. Click **Pages** (left sidebar)
4. Under **Source**, select "Deploy from a branch"
5. Select **Branch**: "gh-pages"
6. Select **Folder**: "/ (root)"
7. Click **Save**

### Option 3: Use Netlify (Alternative)
The repository is already configured for Netlify deployment. You can:
1. Go to https://netlify.com
2. Connect your GitHub repository
3. Deploy automatically on every push

### Option 4: Fix GitHub Actions Permissions
If you want to use GitHub Actions, you need to:
1. Go to repository **Settings** → **Actions** → **General**
2. Under **Workflow permissions**, select "Read and write permissions"
3. Check "Allow GitHub Actions to create and approve pull requests"

## Current Status
- ✅ React app is built and ready
- ✅ All files are properly configured
- ❌ GitHub Actions needs permission fix
- ✅ Manual deployment script is ready

## Next Steps
1. Try the manual deployment script first
2. If that works, enable GitHub Pages in settings
3. Your site will be live at: https://anticorn.github.io/business-website
