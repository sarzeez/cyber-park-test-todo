/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    USERNAME: process.env.USERNAME,
    PASSWORD: process.env.PASSWORD,
    BACKEND_URL: process.env.BACKEND_URL,
  },
};

export default nextConfig;
