/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true, // ONLY FOR STATIC EXPORTS
  // output: "export", // ONLY FOR STATIC EXPORTS
  reactStrictMode: true,
  swcMinify: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    unoptimized: true, // ONLY FOR STATIC EXPORTS
  },
  experimental: {
    largePageDataBytes: 128 * 100000
  },
  exportPathMap: async function () {
    return {
      '/': { page: '/' },
      '/privacy-policy': { page: '/privacy-policy' },
      '/contact': { page: '/contact' },
      '/admin': { page: '/admin' },
      '/about': { page: '/about' },
      '/africa': { page: '/africa' },
      '/europe-winners-2023': { page: '/europe-winners-2023' },
      '/south-america': { page: '/south-america' },
    }
  }
}

module.exports = nextConfig
