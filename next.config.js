/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "http://localhost:3000",
    DB_LOCAL_URI: "mongodb+srv://nayan:crAkcpwx98xR9Bq9@bookit.ubqjygm.mongodb.net/",
    DB_URI: "mongodb+srv://nayan:crAkcpwx98xR9Bq9@bookit.ubqjygm.mongodb.net/",

    CLOUDINARY_CLOUD_NAME: "ddwquk4p9",
    CLOUDINARY_API_KEY: "625626343342268",
    CLOUDINARY_API_SECRET: "xecUMQ8ur7QVwxJvgC0nxaHWEtY",

    NEXTAUTH_URL: "http://localhost:3000",
    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
