/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
  },
};

export default nextConfig;
