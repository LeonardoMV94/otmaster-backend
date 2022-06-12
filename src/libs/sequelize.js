import Sequelize from 'sequelize';
import setupModels from './../db/models/index.js'
import config from '../config/config.js'

const USER      = encodeURIComponent(config.dbUser)
const PASSWORD  = encodeURIComponent(config.dbPass)

const URI = `${config.dbSystem}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`


// https://sequelize.org/docs/v6/getting-started/

const sequelize = new Sequelize( URI, {
    dialect:`${config.dbSystem}`,
    logging: true
})

setupModels(sequelize);

//sequelize.sync();

export default sequelize;