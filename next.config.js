/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: [
            "avatars.githubusercontent.com",
            "lh3.googleusercontent.com",
            "res.cloudinary.com",
            "images.pexels.com"
        ]
    },
    env: {
        stripe_key: process.env.stripe_key,
        stripe_secretkey: process.env.stripe_secretkey,
    }
}

module.exports = nextConfig
