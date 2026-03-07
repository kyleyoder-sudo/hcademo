import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    qualities: [75, 85, 90, 100],
    formats: ["image/avif", "image/webp"],
    unoptimized: false,
  },
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
