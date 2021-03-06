const { config } = require('../config/config-common.cjs');

module.exports = {
    development: {
        url: config.URI,
        dialect: 'postgres',
        logging: true,
        // dialectOptions: {
        //     ssl: {
        //         rejectUnauthorized: false
        //     }
        // }
    },
    production: {
        url: config.URI,
        dialect: 'postgres',
        logging: true,
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
}
