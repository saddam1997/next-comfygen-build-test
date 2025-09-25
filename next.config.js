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

