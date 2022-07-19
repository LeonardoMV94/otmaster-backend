import {Model, DataTypes, Sequelize} from 'sequelize';

const MARCAS_DISPOSITIVOS_TABLE = 'marcas_dispositivos';

const MarcaDispositivoSchema = {
    id_marca: {
        field: 'id_marca',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    nombre_marca: {
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

class MarcaDispositivo extends Model{
    static associate(models){
        //models
        this.hasMany(models.Dispositivo, {
            as: 'dispositivos',
            foreignKey: 'marcasDispositivosIdMarcas'
        })
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: MARCAS_DISPOSITIVOS_TABLE,
            modelName: 'MarcaDispositivo',
            timestamp: false
        }
    }
}

export {
    MARCAS_DISPOSITIVOS_TABLE,
    MarcaDispositivoSchema,
    MarcaDispositivo
}