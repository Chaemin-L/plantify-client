import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
