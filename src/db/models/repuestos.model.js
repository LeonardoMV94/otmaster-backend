import {Model, DataTypes, Sequelize} from 'sequelize';

const REPUESTOS_TABLE = 'repuestos';

const RepuestoSchema = {
    id_repuesto: {
        field: 'id_repuesto',
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: DataTypes.INTEGER,
    },
    repuesto: {
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

class Repuesto extends Model{
    static associate(models){
        //relacion uno a muchos
        this.belongsToMany(
            models.Ticket, 
            {
                through: 'repuestos_ticket'
            }
            )
    }
    static config(sequelize) {
        return {
            sequelize,
            tableName: REPUESTOS_TABLE,
            modelName: 'Repuesto',
            timestamp: false
        }
    }
}

export {
    REPUESTOS_TABLE,
    RepuestoSchema,
    Repuesto
}