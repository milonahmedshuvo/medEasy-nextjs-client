/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'medeasy.health',
            port: '',
            pathname: '',
          },
        ],
      },
};

export default nextConfig;
