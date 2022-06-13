import {Cliente,ClienteSchema} from './cliente.model.js';
import {Colaborador,ColaboradorSchema} from './colaborador.model.js';
// import {Rol,RolesSchema} from './roles.model.js';
import {Direccion,DireccionSchema} from './direccion.model.js';
// import {Comuna,ComunaSchema} from './comuna.model.js';

const setupModels = (sequelize) => {
    //aqui van todos los modelos
    Cliente.init(ClienteSchema, Cliente.config(sequelize));
    Colaborador.init(ColaboradorSchema, Colaborador.config(sequelize));
    // Rol.init(RolesSchema, Rol.config(sequelize));
    Direccion.init(DireccionSchema, Direccion.config(sequelize));
    //Comuna.init(ComunaSchema, Comuna.config(sequelize));

    
}

export default setupModels;