import {Model, DataTypes, Sequelize} from 'sequelize';
import { COLABORADORES_TABLE } from './colaborador.model';
import { CLIENTES_TABLE } from './cliente.model';
import { DISPOSITIVOS_TABLE } from './dispositivo.model'

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
        //field: 'dispositivos_ID_dispositivo',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: DISPOSITIVOS_TABLE,
            key: 'ID_dispositivo',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    clientes_ID_cliente: {
        //field: 'clientes_ID_cliente',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: CLIENTES_TABLE,
            key: 'rut_cliente',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },
    colaboradores_ID_colaborador: {
        //field: 'colaboradores_ID_colaborador',
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: COLABORADORES_TABLE,
            key: 'rut_colaborador',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
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
        });

        // Relcacion muchos a uno Ticket --> Colaborador
        this.belongsTo( models.Colaborador, { as : 'colaboradores' } );

        // Relcacion muchos a uno Ticket --> Dispositivo
        this.belongsTo( models.Dispositivo, { as : 'dispositivos' } );

        // Relcacion muchos a uno Ticket --> Cliente
        this.belongsTo( models.Cliente, { as : 'clientes' } );

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