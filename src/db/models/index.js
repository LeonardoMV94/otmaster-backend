import { Cliente, ClienteSchema } from './cliente.model.js';
import { Colaborador, ColaboradorSchema } from './colaborador.model.js';
import { Rol, RolesSchema } from './roles.model.js';
import { Dispositivo, DispositivoSchema } from './dispositivo.model.js';
import { MarcaDispositivo, MarcaDispositivoSchema } from './marcaDispositivos.model.js';
import { TipoDispositivo, TipoDispositivoSchema } from './tiposDispositivos.model.js';
import { Ticket,TicketSchema } from './ticket.model.js';
import { Repuesto, RepuestoSchema } from './repuestos.model.js';
import { Repuestos_has_tickets, Repuestos_has_tickets_Schema } from './repuestos_has_tickets.model.js'

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
    Repuestos_has_tickets.init(Repuestos_has_tickets_Schema, Repuestos_has_tickets.config(sequelize));

    Rol.associate(sequelize.models)
    Colaborador.associate(sequelize.models)
}

export default setupModels;