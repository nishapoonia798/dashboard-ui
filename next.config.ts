// next.config.js  or  next.config.mjs  or  next.config.ts
import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  // …any other options
  webpack(config) {
    // Add the “@/” alias so Webpack (and therefore Vercel) can resolve it
    config.resolve.alias['@'] = path.resolve(__dirname);  // project root
    return config;
  },
};

export default nextConfig;
