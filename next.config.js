/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,
  images: {
    domains: ["media.edutopia.org", "bethelbibleseminary.hk"],
  },
};

module.exports = nextConfig;
