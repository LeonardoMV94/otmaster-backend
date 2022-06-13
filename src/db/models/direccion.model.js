import {Model, DataTypes, Sequelize} from 'sequelize';

const DIRECCIONES_TABLE = 'direcciones';

const DireccionSchema = {
    ID_direccion: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    calle: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    numero_calle: {
        allowNull: false,
        type: DataTypes.INTEGER,
    },
    comunas_ID_comunas: {
        allowNull: false,
        type: DataTypes.INTEGER,
        // Foreign Key implementada con 'references', No probado que funcione (12-06-2022).
        references: { 
            model: 'comunas', 
            key: 'ID_comuna',
        },
    },
    // Foreign Key hacia la tabla 'colaboradores'
    colaboradores_ID_colaborador: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
            model: 'colaboradores',
            key: 'rut_colaborador',
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

class Direccion extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: DIRECCIONES_TABLE,
            modelName: 'Direccion',
            timestamp: false
        }
    }
}

export {
    DIRECCIONES_TABLE,
    DireccionSchema,
    Direccion
}