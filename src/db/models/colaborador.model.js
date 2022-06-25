import {Model, DataTypes, Sequelize} from 'sequelize';
import { ROLES_TABLE } from './roles.model.js'

const COLABORADORES_TABLE = 'colaboradores';

const ColaboradorSchema = {
    rut_colaborador: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.INTEGER,
    },
    password_colaborador: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    nombre_colaborador: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    apmat_colaborador: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    appat_colaborador: {
        allowNull: false,
        type: DataTypes.STRING,
    },
    // 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Roles'.
    rolesIdRol: {
        field: 'roles_id_rol',
        allowNull: false,
        type: DataTypes.INTEGER,
        // Foreign Key implementada con 'references', No probado que funcione (12-06-2022).
        references: { 
            model: ROLES_TABLE, 
            key: 'id_rol',
        },
        onUpdate: 'CASCADE',
        onDelete: 'SET NULL'
    },

    // Fecha de creacion : createdAt attribute
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

class Colaborador extends Model{
    static associate(models){
        //models
        this.belongsTo( models.Rol, { as : 'roles' } )
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: COLABORADORES_TABLE,
            modelName: 'Colaborador',
            timestamp: false
        }
    }
}

export {
    COLABORADORES_TABLE,
    ColaboradorSchema,
    Colaborador
}
