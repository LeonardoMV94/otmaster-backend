'use strict';
import { ClienteSchema, CLIENTE_TABLE} from '../models/cliente.model.js'
import { ColaboradorSchema, COLABORADORES_TABLE} from '../models/colaborador.model.js'
import { RolesSchema, ROLES_TABLE} from '../models/roles.model.js'
import { DispositivoSchema, DISPOSITIVOS_TABLE} from '../models/dispositivo.model.js'
import { MarcaDispositivoSchema, MARCAS_DISPOSITIVOS_TABLE} from '../models/marcaDispositivos.model.js'
import { TipoDispositivoSchema, TIPOS_DISPOSITIVOS_TABLE} from '../models/tiposDispositivos.model.js'
import { TicketSchema, TICKETS_TABLE} from '../models/ticket.model.js'
import { RepuestoSchema, REPUESTOS_TABLE} from '../models/repuestos.model.js'
import { Repuestos_has_tickets_Schema, REPUESTOS_HAS_TICKETS_TABLE} from '../models/repuestos_has_tickets.model.js'

module.exports = {
  async up (queryInterface) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable(ROLES_TABLE, RolesSchema)
    await queryInterface.createTable(CLIENTE_TABLE, ClienteSchema)
    await queryInterface.createTable(COLABORADORES_TABLE, ColaboradorSchema)
    await queryInterface.createTable(MARCAS_DISPOSITIVOS_TABLE, MarcaDispositivoSchema)
    await queryInterface.createTable(TIPOS_DISPOSITIVOS_TABLE, TipoDispositivoSchema)
    await queryInterface.createTable(DISPOSITIVOS_TABLE, DispositivoSchema)
    await queryInterface.createTable(TICKETS_TABLE, TicketSchema)
    await queryInterface.createTable(REPUESTOS_TABLE, RepuestoSchema)
    await queryInterface.createTable(REPUESTOS_HAS_TICKETS_TABLE, Repuestos_has_tickets_Schema)
  },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
      await queryInterface.drop(CLIENTE_TABLE)
      await queryInterface.drop(COLABORADORES_TABLE)
      await queryInterface.drop(ROLES_TABLE)
      await queryInterface.drop(DISPOSITIVOS_TABLE)
      await queryInterface.drop(MARCAS_DISPOSITIVOS_TABLE)
      await queryInterface.drop(TICKETS_TABLE)
      await queryInterface.drop(REPUESTOS_TABLE)
      await queryInterface.drop(REPUESTOS_HAS_TICKETS_TABLE)
  }
};
