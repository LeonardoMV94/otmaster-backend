require('dotenv').config();

const config = { 
    env:         process.env.NODE_ENV || 'dev',
    dbDialect:   process.env.BD_SYSTEM,
    isProd:      process.env.NODE_ENV === 'production',
    URI:         process.env.DATABASE_URL,
    jwtSecret:   process.env.JWT_SECRET
}

module.exports = { config };