import {Model, DataTypes, Sequelize} from 'sequelize';

const CLIENTES_TABLE = 'clientes';

const ClienteSchema = {
    rut_cliente: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.STRING,
    },
    nombre_cliente: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    apmat_cliente: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    appat_cliente: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    correo_cliente: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true
    },
    tel_cliente: {
        allowNull: false,
        type: DataTypes.INTEGER,
    }
    
}

class Cliente extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: CLIENTES_TABLE,
            modelName: 'Cliente',
            timestamp: false
        }
    }
}

export {
    CLIENTES_TABLE,
    ClienteSchema,
    Cliente
}