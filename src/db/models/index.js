import {Cliente,ClienteSchema} from './cliente.model.js';

const setupModels = (sequelize) => {
    //aqui van todos los modelos
    Cliente.init(ClienteSchema, Cliente.config(sequelize));

    
}

export default setupModels;