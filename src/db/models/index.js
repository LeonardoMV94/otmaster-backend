import {Cliente,ClienteSchema} from './cliente.model.js';

const setupModels = (sequelize) => {
    Cliente.init(ClienteSchema, Cliente.config(sequelize));
}

export {
    setupModels
}