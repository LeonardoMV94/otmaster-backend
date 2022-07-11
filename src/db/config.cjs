const { config } = require('../config/config-common.cjs');

module.exports = {
    development: {
        url: config.URI,
        dialect: config.dbDialect,
    },
    production: {
        url: config.URI,
        dialect: 'mysql',
        dialectOptions: {
            ssl: {
                rejectUnauthorized: false
            }
        }
    }
}
