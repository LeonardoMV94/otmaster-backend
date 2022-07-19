import {Model, DataTypes, Sequelize} from 'sequelize';

const TIPOS_DISPOSITIVOS_TABLE = 'tipos_dispositivos';

const TipoDispositivoSchema = {
    id_tipo: {
        field: 'id_tipo',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nombre_tipo: {
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

class TipoDispositivo extends Model{
    static associate(models){
        //models
        this.hasMany(models.Dispositivo, {
            as: 'dispositivos',
            foreignKey: 'tiposDispositivosIdTipos'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: TIPOS_DISPOSITIVOS_TABLE,
            modelName: 'TipoDispositivo',
            timestamp: false
        }
    }
}

export {
    TIPOS_DISPOSITIVOS_TABLE,
    TipoDispositivoSchema,
    TipoDispositivo
}