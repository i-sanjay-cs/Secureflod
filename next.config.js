/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        VIRUS_TOTAL_API_KEY: process.env.VIRUS_TOTAL_API_KEY,
    }
}

module.exports = nextConfig
