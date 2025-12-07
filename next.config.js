/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: {
      bodySizeLimit: '10mb',
    },
  },
  images: {
    domains: ['customer-xyz.cloudflarestream.com', 'images.unsplash.com'],
  },
}

module.exports = nextConfig
