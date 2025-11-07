import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config: { resolve: { alias: any; }; }) => {
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@': path.resolve(__dirname, 'src'),
    };
    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "pub-18df4257283b453396bb6fab4370f7d1.r2.dev", // your R2 domain
      },
    ],
  },
};

export default nextConfig;

