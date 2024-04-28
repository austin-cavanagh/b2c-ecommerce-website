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
};

export default nextConfig;
