/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  basePath: isProd ? "/rudi-hadi" : "",
  assetPrefix: isProd ? "/rudi-hadi" : "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: isProd ? "/rudi-hadi" : "",
  },
  allowedDevOrigins: [
    "http://10.10.1.94:3000",
    "http://100.67.44.102:3000",
    "http://localhost:3000",
  ],
};

export default nextConfig;
