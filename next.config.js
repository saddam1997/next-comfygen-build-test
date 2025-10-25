// const withBundleAnalyzer = require('@next/bundle-analyzer')
//   ({
//     enabled: false,
//     openAnalyzer: false,
//   })

// module.exports = withBundleAnalyzer({
//   "env": {
//     "URL": "https://www.comfygen.com",
//     "NEXT_PUBLIC_MEASUREMENT_ID": "UA-228613134-1",
//   },
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'www.comfygen.com',
//         port: '', // Leave empty if no specific port is needed
//         pathname: '/**', // Match all paths under this domain
//       },
//     ],
//   },
//   compress: true,
// })


const withBundleAnalyzer = require('@next/bundle-analyzer')
  ({
    enabled: false,
    openAnalyzer: false,
  })

module.exports = withBundleAnalyzer({
  "env": {
    "URL": "https://www.comfygen.com",
    "NEXT_PUBLIC_MEASUREMENT_ID": "UA-228613134-1",
  },
  reactStrictMode: true,


  images: {
    // domains: ['http://localhost:1225'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.comfygen.com',
        port: '', // Leave empty if no specific port is needed
        pathname: '/**', // Match all paths under this domain
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "1225", // Ensure this matches your local server port
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"], // enables automatic WebP/AVIF conversion
    minimumCacheTTL: 3600, // cache images for 1 hour
    qualities: [50, 70, 75, 80, 85, 90, 100],
    deviceSizes: [320, 480, 768, 1024, 1280], // responsive breakpoints
    imageSizes: [16, 32, 64, 128, 256, 384],
  },
  compress: true,
})



// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//   enabled: false,
//   openAnalyzer: false,
// })

// module.exports = withBundleAnalyzer({
//   env: {
//     URL: "https://www.comfygen.com",
//     NEXT_PUBLIC_MEASUREMENT_ID: "UA-228613134-1",
//   },
//   reactStrictMode: true,
//   images: {
//     remotePatterns: [
//       {
//         protocol: 'https',
//         hostname: 'www.comfygen.com',
//         port: '',
//         pathname: '/**',
//       },
//       {
//         protocol: 'http',
//         hostname: 'localhost',
//         port: '1225',
//         pathname: '/**',
//       },
//     ],
//   },
//   compress: true,

//   // 🔥 Add global redirect rule here
//   async redirects() {
//     return [
//       {
//         source: '/:path*',   // Match all routes
//         destination: '/',    // Redirect to home
//         permanent: true,     // 301 redirect
//       },
//     ]
//   },
// })

