/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.smilefoundationindia.org",
      },
    ],
  },
};

export default nextConfig;
