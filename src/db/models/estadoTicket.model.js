import {Model, DataTypes, Sequelize} from 'sequelize';

const ESTADO_TICKETS_TABLE = 'estado_tickets';

const EstadoTicketSchema = {
    ID_estado_ticket: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    estado: {
        allowNull: false,
        type: DataTypes.STRING,
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

class EstadoTicket extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ESTADO_TICKETS_TABLE,
            modelName: 'EstadoTicket',
            timestamp: false
        }
    }
}

export {
    ESTADO_TICKETS_TABLE,
    EstadoTicketSchema,
    EstadoTicket
}