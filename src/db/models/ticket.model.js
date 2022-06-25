import {Model, DataTypes, Sequelize} from 'sequelize';

const TICKETS_TABLE = 'tickets';

const TicketSchema = {
    ID_ticket: {
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
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'dispositivos',
            key: 'ID_dispositivo',
        }
    },
    clientes_ID_cliente: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'clientes',
            key: 'rut_cliente',
        }
    },
    colaboradores_ID_colaborador: {
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
        this.belongsToMany(models.Repuesto, {
            as: 'items',
            through: models.Repuestos_has_tickets,
            foreignKey: 'ticketsIdTicket',
            otherKey: 'repuestosIdRepuesto'
        })
        // TODO: faltan relaciones: colaboradores, clientes, dispositivos
        /*
        // JOIN foreign Key 
        include : {
            model: Cliente
            // model: Colaborador,
            // model: Dispositivo
        }*/

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