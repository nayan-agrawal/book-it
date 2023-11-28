/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    API_URL: "https://book-it-seven.vercel.app",
    DB_LOCAL_URI: "mongodb+srv://nayan:crAkcpwx98xR9Bq9@bookit.ubqjygm.mongodb.net/",
    DB_URI: "mongodb+srv://nayan:crAkcpwx98xR9Bq9@bookit.ubqjygm.mongodb.net/",

    STRIPE_WEBHOOK_SECRET: "whsec_SoRi3A8qYmPKhbeoiMfjpzFNH4pfFBil",

    STRIPE_SECRET_KEY: "sk_test_51Hu1mXKnau85Qpko2ZaCexs82DRp6xMOvNnIfjfRG6oTyNr3fHtTUfizNxm2xDZQPCdH7xZu6OnCmWYt0WiySnwo00DULtinao",

    CLOUDINARY_CLOUD_NAME: "ddwquk4p9",
    CLOUDINARY_API_KEY: "625626343342268",
    CLOUDINARY_API_SECRET: "xecUMQ8ur7QVwxJvgC0nxaHWEtY",

    SMTP_HOST: "sandbox.smtp.mailtrap.io",
    SMTP_PORT: 2525,
    SMTP_USER: "2ee72b74aa3410",
    SMTP_PASSWORD: "90ff27b0c39199",
    SMTP_FROM_EMAIL: "noreply@bookit.com",
    SMTP_FROM_NAME: "BookIT",

    GEOCODER_API_KEY: "cnE46vuIZluc7xOFGCwklFRjbVRzet2j",
    GEOCODER_PROVIDER: "mapquest",

    MAPBOX_ACCESS_TOKEN: "",

    NEXTAUTH_URL: "https://book-it-seven.vercel.app",
    NEXTAUTH_SECRET: "KSDFJKLSDJFLKSDFJSLDKF934KJLDJGDLKGFJDF",
    REVALIDATE_TOKEN: "JK34J50JSDKFLJSDKF034I5DKFJSDK4IJFKSDJFL",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};

module.exports = nextConfig;
