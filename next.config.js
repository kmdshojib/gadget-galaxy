/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    env: {
        stripe_key: process.env.stripe_key,
        stripe_secretkey: process.env.stripe_secretkey,
    }
}

module.exports = nextConfig
