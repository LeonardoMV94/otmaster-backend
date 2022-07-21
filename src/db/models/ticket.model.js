import {Model, DataTypes, Sequelize} from 'sequelize';

const TICKETS_TABLE = 'tickets';

const TicketSchema = {
    id_ticket: {
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
    dispositivosIdDispositivo: {
        field: 'dispositivos_id_dispositivo',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'dispositivos',
            key: 'id_dispositivo',
        }
    },
    clientesRutCliente: {
        field: 'clientes_rut_cliente',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'clientes',
            key: 'rut_cliente',
        }
    },
    colaboradoresRutColaborador: {
        field: 'colaboradores_rut_colaborador',
        allowNull: false,
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
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
    }
}

class Ticket extends Model{
    static associate(models){
        //relacion uno a muchos hacia repuesto
        // this.belongsToMany(models.Repuesto, {
        //     as: 'items',
        //     through: models.Repuestos_has_tickets,
        //     foreignKey: 'tickets_id_ticket',
        //     otherKey: 'repuestos_id_repuesto'
        // })
        
        this.belongsTo( models.Colaborador, { as : 'colaboradores' } )
        this.belongsTo( models.Cliente, { as : 'clientes' } )
        this.belongsTo( models.Dispositivo, { as : 'dispositivos' } )

        // many to many
        this.belongsToMany(models.Repuesto, {
            as: 'items',
            through: 'repuestos_ticket',
            foreignKey: 'ticketsIdTicket',
            otherKey: 'repuestosIdRepuesto'
        })
        
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: TICKETS_TABLE,
            modelName: 'Ticket',
            timestamp: false
        }
    }
}

export {
    TICKETS_TABLE,
    TicketSchema,
    Ticket
}