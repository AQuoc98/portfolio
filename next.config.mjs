/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    // Cache optimized images for 30 days (default is 60 s)
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },
};

export default nextConfig;
