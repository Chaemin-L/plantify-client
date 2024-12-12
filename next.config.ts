import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  async rewrites() {
    return [
      {
        source: "/recommend",
        destination: "http://localhost:8000/recommend",
      },
    ];
  },
};

export default nextConfig;
