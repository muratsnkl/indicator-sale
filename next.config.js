/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'placehold.co',
      },
    ],
  },
  // Demo için API'yi devre dışı bırakıyoruz
  async rewrites() {
    return []
  }
}

module.exports = nextConfig 