import {Model, DataTypes, Sequelize} from 'sequelize';

const TICKETS_TABLE = 'tickets';

const TicketSchema = {
    ID_ticket: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    diagnostico_ticket: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    resolucion_ticket: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    estado_tickets_ID_estado: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'estado_tickets',
            key: 'ID_estado_ticket',
        }
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
    repuestos_ID_repuesto: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'repuestos',
            key: 'ID_repuesto',
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
    static associate(){
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