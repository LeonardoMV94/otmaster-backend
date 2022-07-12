import { Cliente, ClienteSchema } from './cliente.model.js';
import { Colaborador, ColaboradorSchema } from './colaborador.model.js';
import { Rol, RolesSchema } from './roles.model.js';
import { Dispositivo, DispositivoSchema } from './dispositivo.model.js';
import { MarcaDispositivo, MarcaDispositivoSchema } from './marcaDispositivos.model.js';
import { TipoDispositivo, TipoDispositivoSchema } from './tiposDispositivos.model.js';
import { Ticket,TicketSchema } from './ticket.model.js';
import { Repuesto, RepuestoSchema } from './repuestos.model.js';
import { Repuestos_ticket_Schema, Repuestos_ticket } from './RepuestosTicket.model.js';

const setupModels = (sequelize) => {
    //aqui van todos los modelos
    Cliente.init(ClienteSchema, Cliente.config(sequelize));
    TipoDispositivo.init(TipoDispositivoSchema, TipoDispositivo.config(sequelize));
    MarcaDispositivo.init(MarcaDispositivoSchema, MarcaDispositivo.config(sequelize));
    Colaborador.init(ColaboradorSchema, Colaborador.config(sequelize));
    Rol.init(RolesSchema, Rol.config(sequelize));
    Dispositivo.init(DispositivoSchema, Dispositivo.config(sequelize));
    Ticket.init(TicketSchema, Ticket.config(sequelize));
    Repuesto.init(RepuestoSchema, Repuesto.config(sequelize));
    Repuestos_ticket.init(Repuestos_ticket_Schema, Repuestos_ticket.config(sequelize));

    // aqui van las asociaciones
    Rol.associate(sequelize.models);
    Colaborador.associate(sequelize.models);
    Cliente.associate(sequelize.models);
    TipoDispositivo.associate(sequelize.models)
    MarcaDispositivo.associate(sequelize.models)
    Dispositivo.associate(sequelize.models)
    Repuesto.associate(sequelize.models)
    Ticket.associate(sequelize.models);
};

export default setupModels;