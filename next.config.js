const redirects = require('./redirects');

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
  // experimental: {
  //   legacyBrowsers: false,
  // },
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
    qualities: [50, 70, 75, 80, 85, 90, 100],
  },

  // experimental: {
  //   optimizeCss: true, // requires "critters" (installed ✔)
  //   optimizePackageImports: [
  //     'react-icons',
  //     'lucide-react',
  //     '@tabler/icons-react',
  //   ],
  // },

  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },

  async redirects() {
    return redirects;
  },
};

module.exports = withBundleAnalyzer(nextConfig);
