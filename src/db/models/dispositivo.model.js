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
        type: DataTypes.STRING,
    },
    modelo: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    marcasDispositivosIdMarcas: {
        field: 'marcas_dispositivos_id_marcas',
        type: DataTypes.INTEGER,
        references: { 
            model: 'marcas_dispositivos', 
            key: 'id_marca',
        },
    },
    tiposDispositivosIdTipos: {
        field: 'tipos_dispositivos_id_tipos',
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
    static associate(models){
        //models
        this.belongsTo( models.MarcaDispositivo, { as : 'marcas' } )
        this.belongsTo( models.TipoDispositivo, { as : 'tipos' } )
        this.hasMany(models.Ticket, {
            as: 'tickets',
            foreignKey: 'dispositivos_id_dispositivo'
        })
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