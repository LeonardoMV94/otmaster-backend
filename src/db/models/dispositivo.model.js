import {Model, DataTypes, Sequelize} from 'sequelize';

const DISPOSITIVOS_TABLE = 'dispositivos';

const DispositivoSchema = {
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
    marcas_dispositivos_ID_marcas: {
        type: DataTypes.INTEGER,
        references: { 
            model: 'marcas_dispositivos', 
            key: 'id_marca',
        },
    },
    tipos_dispositivos_ID_tipos: {
        type: DataTypes.INTEGER,
        references: {
            model: 'tipos_dispositivos',
            key: 'id_tipo',
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

class Dispositivo extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: DISPOSITIVOS_TABLE,
            modelName: 'Dispositivo',
            timestamp: false
        }
    }
}

export {
    DISPOSITIVOS_TABLE,
    DispositivoSchema,
    Dispositivo
}