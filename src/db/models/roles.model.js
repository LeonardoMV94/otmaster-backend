import {Model, DataTypes, Sequelize} from 'sequelize';

const ROLES_TABLE = 'roles';

const RolSchema = {
    ID_rol: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    nombre_rol: {
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

class Rol extends Model{
    static associate(){
        //models
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: ROLES_TABLE,
            modelName: 'Rol',
            timestamp: false
        }
    }
}

export {
    ROLES_TABLE,
    RolSchema,
    Rol
}