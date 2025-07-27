/** @type {import('next').NextConfig} */

import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables from .env.local
dotenv.config({ path: path.resolve(__dirname, '.env.local') });

const nextConfig = {
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'build-placeholder',
    GOOGLE_API_KEY: process.env.GOOGLE_API_KEY || 'build-placeholder',
    GOOGLE_CX: process.env.GOOGLE_CX || 'build-placeholder',
    STRIPE_SECRET_KEY: process.env.STRIPE_SECRET_KEY || 'build-placeholder',
    NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'build-placeholder',
    NEXT_PUBLIC_URL: process.env.NEXT_PUBLIC_URL || 'http://localhost:3000',
    OPENWEATHERMAP_API_KEY: process.env.OPENWEATHERMAP_API_KEY || 'build-placeholder',
    ALPHA_VANTAGE_API_KEY: process.env.ALPHA_VANTAGE_API_KEY || 'build-placeholder',
    FINNHUB_API_KEY: process.env.FINNHUB_API_KEY || 'build-placeholder',
  },
  // Skip build errors for deployment
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    esmExternals: 'loose'
  },
  webpack: (config, { isServer }) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      net: false,
      tls: false,
    };

    config.module.rules.push({
      test: /\.m?js$/,
      include: /node_modules\/undici/,
      type: 'javascript/auto',
      resolve: {
        fullySpecified: false,
      },
    });

    config.externals = config.externals || [];
    if (isServer) {
      config.externals.push({
        'undici': 'commonjs undici'
      });
    }

    return config;
  },
};

export default nextConfig;
