/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        API_URL: "http://localhost:3000",
        DB_LOCAL_URI: "mongodb+srv://nayan:crAkcpwx98xR9Bq9@bookit.ubqjygm.mongodb.net/",
        DB_URI: "mongodb+srv://nayan:crAkcpwx98xR9Bq9@bookit.ubqjygm.mongodb.net/",

        NEXTAUTH_URL: "http://localhost:3000",
        NENXTAUTH_SECRET: "ADASDADASDADWRWGASFAFAFGAGADAAGAAAHSHSDJDG"
    },
    images: {
        domains: ['res.cloudinary.com']
    }
}

module.exports = nextConfig
