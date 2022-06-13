import {Model, DataTypes, Sequelize} from 'sequelize';

const COMUNAS_TABLE = 'comunas';

const ComunaSchema = {
    ID_comuna: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    comuna: {
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

class Comuna extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: COMUNAS_TABLE,
            modelName: 'Comuna',
            timestamp: false
        }
    }
}

export {
    COMUNAS_TABLE,
    ComunaSchema,
    Comuna
}