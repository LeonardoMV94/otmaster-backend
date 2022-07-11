import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';

//dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: __dirname + './../../.env'
});

const config = { 
    env:         process.env.NODE_ENV || 'development',
    dbDialect:   process.env.BD_SYSTEM,
    isProd:      process.env.NODE_ENV === 'production',
    URI:         process.env.DATABASE_URL,
    jwtSecret:   process.env.JWT_SECRET
}

export default config;