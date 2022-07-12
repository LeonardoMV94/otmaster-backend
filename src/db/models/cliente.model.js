import {Model, DataTypes, Sequelize} from 'sequelize';

const CLIENTES_TABLE = 'clientes';

const ClienteSchema = {
    rut_cliente: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
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

class Cliente extends Model{
    static associate(models){
        //models
        this.hasMany(models.Ticket, {
            as: 'tickets',
            foreignKey: 'clientes_id_cliente'
        })
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