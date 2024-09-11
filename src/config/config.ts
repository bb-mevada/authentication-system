import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

export default {
    // General
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // Frontend
    FRONTEND_URL: process.env.FRONTEND_URL,

    // Email Service
    EMAIL_API_KEY: process.env.EMAIL_API_KEY,

    // Database
    DATABASE_URL: process.env.DATABASE_URL,

    // Access Token
    ACCESS_TOKEN: {
        SECRET: process.env.ACCESS_TOKEN_SECRET,
        EXPIRY: 3600
    },

    // Refresh Token
    REFRESH_TOKEN: {
        SECRET: process.env.REFRESH_TOKEN_SECRET,
        EXPIRY: 3600 * 24 * 365
    }
}
