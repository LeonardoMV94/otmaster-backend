import Sequelize from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';
import setupModels from './../db/models/index.js'

//dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: __dirname + './../../.env'
})

// const configDB = {
//     host: process.env.BD_HOST,
//     database: process.env.BD_NAME,
//     user: process.env.BD_USER,
//     password: process.env.BD_PASSWORD,
//     waitForConnections: true,
//     connectionLimit: 10,
//     queueLimit: 0
// }

// https://sequelize.org/docs/v6/getting-started/

const sequelize = new Sequelize(process.env.BD_NAME,process.env.BD_USER,process.env.BD_PASSWORD,{
    localhost: process.env.BD_HOST,
    dialect:'mysql',
    logging: true
})

setupModels(sequelize);

sequelize.sync();

export default sequelize;