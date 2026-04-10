import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/products/ladies-bags",
        destination: "/products/bags",
        permanent: true,
      },
      {
        source: "/products/gents-bags",
        destination: "/products/bags",
        permanent: true,
      },
      {
        source: "/products/ladies-bags/:product",
        destination: "/products/bags/:product",
        permanent: true,
      },
      {
        source: "/products/gents-bags/:product",
        destination: "/products/bags/:product",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
