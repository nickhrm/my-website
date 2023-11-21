/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_KEY: process.env.OPENAI_KEY,
    STRAPI_KEY: process.env.STRAPI_KEY,
  },
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**",
      },
    ],
  },
  output: 'standalone',

}

module.exports = nextConfig
