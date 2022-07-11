import Sequelize from 'sequelize';
import setupModels from './../db/models/index.js';
import config from '../config/config.js';

const options = {
    dialect:`${config.dbDialect}`,
    logging: config.isProd ? false : true
}

if (config.isProd) {
    options.dialectOptions = {
        ssl: {
            rejectUnauthorized: false
        }
    }
}


// https://sequelize.org/docs/v6/getting-started/

const sequelize = new Sequelize( config.URI, options);

setupModels(sequelize);


if(!config.isProd){
    // no se debe usar en produccion
    sequelize.sync( { force: true} )
}

export default sequelize;