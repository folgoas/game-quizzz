import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  devIndicators: false,
  allowedDevOrigins: ['172.31.160.1', '192.168.1.143', 'localhost'],
};

export default nextConfig;
