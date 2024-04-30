/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'aceternity.com',
      'ecommerce-website-product-images.s3.us-west-1.amazonaws.com',
      'tailwindui.com',
    ],
  },
  output: 'standalone',
  experimental: {
    instrumentationHook: true,
  },
};

export default nextConfig;
