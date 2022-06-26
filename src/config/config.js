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
    env:         process.env.NODE_ENV || 'dev',
    dbSystem:    process.env.BD_SYSTEM,
    dbName:      process.env.BD_NAME,
    dbHost:      process.env.DB_HOST,
    dbPort:      process.env.BD_PORT || 3306,
    dbUser:      process.env.BD_USER,
    dbPass:      process.env.BD_PASSWORD,
    jwtSecret:   process.env.JWT_SECRET
}

export default config;