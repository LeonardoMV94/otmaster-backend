import {Model, DataTypes, Sequelize} from 'sequelize';

const REPUESTOS_TABLE = 'repuestos';

const RepuestoSchema = {
    ID_repuesto: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    repuesto: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    // tickets_ID_ticket: {
    //     allowNull: false,
    //     type: DataTypes.INTEGER,
    //     references: {
    //         model: 'tickets',
    //         key: 'id_ticket',
    //     }
    // },
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

class Repuesto extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: REPUESTOS_TABLE,
            modelName: 'Repuesto',
            timestamp: false
        }
    }
}

export {
    REPUESTOS_TABLE,
    RepuestoSchema,
    Repuesto
}