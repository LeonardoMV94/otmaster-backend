import config from '../config/config.js'

const USER      = encodeURIComponent(config.dbUser)
const PASSWORD  = encodeURIComponent(config.dbPass)

const URI = `${config.dbSystem}://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`

module.export = {
    development: {
        url: URI,
        dialect: `${config.dbSystem}`
    },
    production: {
        url: URI,
        dialect: `${config.dbSystem}`
    }
}