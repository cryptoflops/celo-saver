import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack: (config) => {
    // Ignore optional deps from MetaMask SDK
    config.resolve.fallback = {
      ...(config.resolve.fallback || {}),
      "pino-pretty": false,
      "@react-native-async-storage/async-storage": false,
    };

    return config;
  },
  // Remove output: "export" — @opennextjs/cloudflare handles the build
  images: {
    unoptimized: true,
  },
};

export default nextConfig;