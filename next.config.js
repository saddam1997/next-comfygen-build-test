const redirects = require('./redirects');
const path = require("path");

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
  openAnalyzer: false,
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compress: true,

  env: {
    URL: 'https://www.comfygen.com',
    NEXT_PUBLIC_SITE_URL: 'https://www.comfygen.com',
    NEXT_PUBLIC_MEASUREMENT_ID: 'UA-228613134-1',
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.comfygen.com',
        pathname: '/**',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '1225',
        pathname: '/**',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000, // 1 year
    deviceSizes: [640, 750, 828, 1080, 1200, 1514, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    qualities: [50,60, 70, 75, 80, 85, 90, 100],
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  experimental: {
    optimizePackageImports: [
      'react-icons',
      'lucide-react',
      '@tabler/icons-react'
    ],
  },
  turbopack: {
    resolveAlias: {
      "react-lazy-load": "./components/performance/ImmediateLazyLoad.tsx",
    },
  },
  async redirects() {
    return redirects;
  },
  webpack: (config) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      "react-lazy-load": path.resolve(
        __dirname,
        "components/performance/ImmediateLazyLoad.tsx"
      ),
    };
    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
