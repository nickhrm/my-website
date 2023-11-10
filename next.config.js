/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    OPENAI_KEY: process.env.OPENAI_KEY,
    STRAPI_KEY: "1d8df6e8577e0429e37a5d63866cc8d19a4ce12072dcf4e4a8fb1bc1ae531f23597171a7c8d091e31af921b6f19d66baa2611a6ce55fab6ee31a9fb8c349b29efc8a8a1e40f01d6094ab8914a85973f2c38dc60593e54ad15a83db1d7033ca2b316049edfed697a035f2e5b1354db1d667ed3192a253a0b011bbe1c69229c895",
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
