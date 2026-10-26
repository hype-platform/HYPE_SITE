/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      beforeFiles: [
        { source: "/hype-analytics", destination: "https://hype-analytics.vercel.app/hype-analytics" },
        { source: "/hype-analytics/:path*", destination: "https://hype-analytics.vercel.app/hype-analytics/:path*" },
      ],
    };
  },
};

export default nextConfig;
