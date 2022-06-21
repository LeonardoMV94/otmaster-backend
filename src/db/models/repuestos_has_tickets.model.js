import {Model, DataTypes, Sequelize} from 'sequelize';

const REPUESTOS_HAS_TICKETS_TABLE = 'repuestos_has_tickets';

const Repuestos_has_tickets_Schema = {
    repuestosIdRepuesto: {
        field: 'repuestos_id_repuesto',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'repuestos',
            key: 'id_repuesto',
        }
    },
    ticketsIdTicket: {
        field: 'tickets_id_ticket',
        allowNull: false,
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
}

class Repuestos_has_tickets extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: REPUESTOS_HAS_TICKETS_TABLE,
            modelName: 'Repuestos_has_tickets',
            timestamp: false
        }
    }
}

export {
    REPUESTOS_HAS_TICKETS_TABLE,
    Repuestos_has_tickets_Schema,
    Repuestos_has_tickets
}