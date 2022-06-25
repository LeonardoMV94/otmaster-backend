import {Cliente,ClienteSchema} from './cliente.model.js';
import {Colaborador,ColaboradorSchema} from './colaborador.model.js';
// import {Rol,RolesSchema} from './roles.model.js';
// import {Direccion,DireccionSchema} from './direccion.model.js';
// import {Comuna,ComunaSchema} from './comuna.model.js';
import {Dispositivo,DispositivoSchema} from './dispositivo.model.js';
// import {MarcaDispositivo,MarcaDispositivoSchema} from './marcaDispositivos.model.js';
// import {TipoDispositivo,TipoDispositivoSchema} from './tiposDispositivos.model.js';
import {Ticket,TicketSchema} from './ticket.model.js';
// import {EstadoTicket,EstadoTicketSchema} from './estadoTicket.model.js';
// import {Repuesto,RepuestoSchema} from './repuestos.model.js';

// Associacion JOIN {Ticket : Cliente}
Ticket.belongsTo(Cliente, {foreignKey: "clientes_ID_cliente"});
Cliente.hasMany(Ticket, {foreignKey: "clientes_ID_cliente"});
// Associacion JOIN {Ticket : Colaborador}
// Ticket.belongsTo(Colaborador, {foreignKey: "colaboradores_ID_colaborador"});
// Colaborador.hasMany(Ticket, {foreignKey: "colaboradores_ID_colaborador"});
// Associacion JOIN {Ticket : Colaborador}
// Ticket.belongsTo(Dispositivo, {foreignKey: "dispositivos_ID_dispositivo"});
// Dispositivo.hasMany(Ticket, {foreignKey: "dispositivos_ID_dispositivo"});


const setupModels = (sequelize) => {
    //aqui van todos los modelos
    Cliente.init(ClienteSchema, Cliente.config(sequelize));
    Colaborador.init(ColaboradorSchema, Colaborador.config(sequelize));
    // Rol.init(RolesSchema, Rol.config(sequelize));
    // Direccion.init(DireccionSchema, Direccion.config(sequelize));
    // Comuna.init(ComunaSchema, Comuna.config(sequelize));
    Dispositivo.init(DispositivoSchema, Dispositivo.config(sequelize));
    // MarcaDispositivo.init(MarcaDispositivoSchema, MarcaDispositivo.config(sequelize));
    // TipoDispositivo.init(TipoDispositivoSchema, TipoDispositivo.config(sequelize));
    Ticket.init(TicketSchema, Ticket.config(sequelize));
    // EstadoTicket.init(EstadoTicketSchema, EstadoTicket.config(sequelize));
    // Repuesto.init(RepuestoSchema, Repuesto.config(sequelize));
}

export default setupModels;