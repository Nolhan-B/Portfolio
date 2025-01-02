/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'assets.aceternity.com',
        pathname: '/**', // Permettre tous les chemins
      },
      {
        protocol: 'https',
        hostname: 'api.microlink.io',
        pathname: '/**', // Permettre tous les chemins
      },
    ],
  },
};

export default nextConfig;