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

const DB        = process.env.BD_SYSTEM
const NAME      = process.env.BD_NAME
const HOST      = process.env.DB_HOST
const PORT      = process.env.BD_PORT
const USER      = process.env.BD_USER
const PASSWORD  = process.env.BD_PASSWORD

const URI = `${DB}://${USER}:${PASSWORD}@${HOST}:${PORT}/${NAME}`


// https://sequelize.org/docs/v6/getting-started/

const sequelize = new Sequelize( URI, {
    dialect:`${DB}`,
    logging: true
})

setupModels(sequelize);

sequelize.sync();

export default sequelize;