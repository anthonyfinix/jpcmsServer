module.exports = {
    MONGODB_MAIN_HOST: process.env.MONGODB_MAIN_HOST || "mongodb://localhost:27017",
    MONGODB_MAIN_DB_NAME: process.env.MONGODB_MAIN_DB_NAME || "catalog",
    MONGODB_COMPANY_DB_HOST: process.env.MONGODB_COMPANY_DB_HOST || "mongodb://localhost:27017",
    PORT: process.env.PORT || 8080,
    NODE_ENV: process.env.NODE_ENV || "development",
    JWT_SECRET: process.env.JWT_SECRET || "secret"
}