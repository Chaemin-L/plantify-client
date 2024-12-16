import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: false,
  images: {
    domains: ["mud-kage.kakaocdn.net"],
  },
  env: {
    NEXT_PUBLIC_API_BASE_URL: process.env.NEXT_PUBLIC_API_BASE_URL,
    NEXT_PUBLIC_GRAPHQL_WS_BASE_URL:
      process.env.NEXT_PUBLIC_GRAPHQL_WS_BASE_URL,
  },
};

export default nextConfig;
