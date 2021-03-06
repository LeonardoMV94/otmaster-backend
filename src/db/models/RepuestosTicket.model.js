import {Model, DataTypes, Sequelize} from 'sequelize';

const REPUESTOS_TICKET_TABLE = 'repuestos_ticket';

const Repuestos_ticket_Schema = {
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
        defaultValue: Sequelize.NOW
    },
    updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        field: 'updated_at',
        defaultValue: Sequelize.NOW
    }
};

class Repuestos_ticket extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: REPUESTOS_TICKET_TABLE,
            modelName: 'repuestos_ticket',
            timestamp: false
        };
    }
}

export {
    REPUESTOS_TICKET_TABLE,
    Repuestos_ticket_Schema,
    Repuestos_ticket
};