# Netlify Deployment Guide

This 3D portfolio is optimized for Netlify deployment with automatic builds and optimized performance.

## Quick Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/Muna18madzinga/web-assignment123)

## Manual Deployment Steps

1. **Connect to Netlify**
   - Go to [Netlify](https://app.netlify.com/)
   - Click "New site from Git"
   - Connect your GitHub account and select this repository

2. **Build Settings** (Auto-configured via netlify.toml)
   - Build command: `npm run build`
   - Publish directory: `dist`
   - Node version: 18

3. **Environment Variables** (Optional)
   If you want to use Firebase features, add these in Netlify dashboard:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```

## Features Optimized for Netlify

- ✅ Single Page Application (SPA) routing
- ✅ Automatic asset optimization
- ✅ CDN-ready static files
- ✅ Proper caching headers
- ✅ Build optimization
- ✅ Responsive design
- ✅ 3D models and textures included

## Performance Optimizations

- Static asset caching (1 year)
- Gzip compression
- Tree-shaken JavaScript bundles
- Optimized 3D model loading
- Lazy loading components

## Build Output

- HTML: ~0.6 KB
- CSS: ~68 KB (11 KB gzipped)
- JS: ~1.67 MB (476 KB gzipped)

The large JavaScript bundle is normal for 3D applications using Three.js and React Three Fiber.