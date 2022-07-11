// import { ColaboradorSchema, COLABORADORES_TABLE } from '../models/colaborador.model.js';
// import { ClienteSchema, CLIENTE_TABLE } from '../models/cliente.model.js';
// import { RolesSchema, ROLES_TABLE } from '../models/roles.model.js';
// import { DispositivoSchema, DISPOSITIVOS_TABLE } from '../models/dispositivo.model.js';
// import { MarcaDispositivoSchema, MARCAS_DISPOSITIVOS_TABLE } from '../models/marcaDispositivos.model.js';
// import { TipoDispositivoSchema, TIPOS_DISPOSITIVOS_TABLE } from '../models/tiposDispositivos.model.js';
// import { TicketSchema, TICKETS_TABLE } from '../models/ticket.model.js';
// import { RepuestoSchema, REPUESTOS_TABLE } from '../models/repuestos.model.js';
// import { Repuestos_has_tickets_Schema, REPUESTOS_HAS_TICKETS_TABLE } from '../models/repuestos_has_tickets.model.js';

module.exports = {
  async up (queryInterface, DataTypes) {



    await queryInterface.createTable('clientes', 
    {
        rut_cliente: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nombre_cliente: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        apmat_cliente: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        appat_cliente: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        correo_cliente: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        tel_cliente: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()
        }
    }, { underscored: true})
    await queryInterface.createTable('tipos_dispositivos', 
    {
        ID_tipo: {
            field: 'id_tipo',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        nombre_tipo: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()
        }
    }, { underscored: true})
    await queryInterface.createTable('marcas_dispositivos', 
    {
        id_marca: {
            field: 'id_marca',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        nombre_marca: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()}
    }, { underscored: true})
    await queryInterface.createTable('roles', 
    {
        id_rol: {
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nombre_rol: {
            allowNull: false,
            type: DataTypes.STRING,
            unique: true
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()
        }
    }, { underscored: true})
    await queryInterface.createTable('colaboradores', 
    {
        rut_colaborador: {
            allowNull: false,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        password_colaborador: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        nombre_colaborador: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        apmat_colaborador: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        appat_colaborador: {
            allowNull: false,
            type: DataTypes.STRING,
        },      
        rolesIdRol: {
            field: 'roles_id_rol',
            foreignKey: true,
            type: DataTypes.INTEGER,
            references: { 
                model: 'roles', 
                key: 'id_rol',
            },
            onUpdate: 'CASCADE',
            onDelete: 'SET NULL'
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()
        }
    }, { underscored: true});
    await queryInterface.createTable('dispositivos', 
    {
        id_dispositivo: {
            field: 'id_dispositivo',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        num_serie_dispositivo: {
            allowNull: false,
            type: DataTypes.INTEGER,
        },
        modelo: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        marcasDispositivosIdMarcas: {
            field: 'marcas_dispositivos_id_marcas',
            type: DataTypes.INTEGER,
            unique:true,            
            references: { 
                model: 'marcas_dispositivos', 
                key: 'id_marca',
            },
        },
        tiposDispositivosIdTipos: {
            field: 'tipos_dispositivos_id_tipos',
            type: DataTypes.INTEGER,            
            unique:true,    
            references: {
                model: 'tipos_dispositivos',
                key: 'id_tipo',
            }
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()
        }
    }, { underscored: true})
    await queryInterface.createTable('tickets', 
    {
        ID_ticket: {
            field: 'id_ticket',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        problema_ticket: {
            allowNull: false,
            type: DataTypes.STRING
        },
        diagnostico_ticket: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        resolucion_ticket: {
            allowNull: true,
            type: DataTypes.STRING,
        },
        estado_ticket: {
            allowNull: false,
            type: DataTypes.INTEGER
        },
        dispositivos_ID_dispositivo: {
            type: DataTypes.INTEGER,
            references: {
                model: 'dispositivos',
                key: 'id_dispositivo',
            }
        },
        clientes_ID_cliente: {
            type: DataTypes.INTEGER,
            references: {
                model: 'clientes',
                key: 'rut_cliente',
            }
        },
        colaboradores_ID_colaborador: {
            type: DataTypes.INTEGER,
            references: {
                model: 'colaboradores',
                key: 'rut_colaborador',
            }
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()
        }
    }, { underscored: true})    
    await queryInterface.createTable('repuestos', 
    {
        ID_repuesto: {
            field: 'id_repuesto',
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
            type: DataTypes.INTEGER,
        },
        repuesto: {
            allowNull: false,
            type: DataTypes.STRING,
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()
        }
    })

    await queryInterface.createTable('repuestos_has_tickets', 
    {
        repuestosIdRepuesto: {
            field: 'repuestos_id_repuesto',
            type: DataTypes.INTEGER,
            references: {
                model: 'repuestos',
                key: 'id_repuesto',
            }
        },
        ticketsIdTicket: {
            field: 'tickets_id_ticket',
            type: DataTypes.INTEGER,
            references: {
                model: 'tickets',
                key: 'id_ticket',
            }
        },
        createdAt:{
            allowNull: false,
            type: DataTypes.DATE,
            field: 'created_at',
            defaultValue: new Date()
        },
        updatedAt: {
            allowNull: false,
            type: DataTypes.DATE,
            field: 'updated_at',
            defaultValue: new Date()
        }
    }, { underscored: true } )
    },

  async down (queryInterface) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.drop('clientes');
    await queryInterface.drop('colaboradores');
    await queryInterface.drop('roles');
    await queryInterface.drop('dispositivos');
    await queryInterface.drop('marcas_dispositivos');
    await queryInterface.drop('tipos_dispositivos');
    await queryInterface.drop('tickets');
    await queryInterface.drop('repuestos');
    await queryInterface.drop('repuestos_has_tickets');
  }
};
