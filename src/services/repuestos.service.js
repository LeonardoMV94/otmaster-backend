import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js'

const {models} = sequelize;
class RepuestosService {

    constructor() {
        
    };

    /**
     * Funcion que crea un nuevo repuesto en la tabla Repuesto
     * @param {Object} repuestoObj Nuevo repuesto
     * @returns Object newRepuesto 
     */
    async create(repuestoObj) {
        const newRepuesto = await models.Repuesto.create(repuestoObj);
        return newRepuesto;
    };

    /**
     * Funcion que retorna todos los repuestos en la tabla REPUESTOS
     * @returns Array retorna arreglo de objetos 
     */
    async find() {
        const repuestos = await models.Repuesto.findAll();
        return repuestos;
    };

    /**
     * Funcion que retorna un repuesto por id
     * @param {Number} id Corresponde a id_repuesto en la tabla REPUESTOS
     * @returns Object retorna repuesto || retorna error not found
     */
    async findById(id) {
        const repuesto = await models.Repuesto.findByPk(id);
        if (!repuesto){
            throw boom.notFound('repuesto not found');
        }
        return repuesto;
    };

    /**
     * Funcion que actualiza columnas de la tabla REPUESTOS
     * @param {Number} id Id de repuesto
     * @param {Object} changes Cambios parciales de repuesto
     * @returns Object Retorna repuesto actualizado
     */
    async update(id, changes) {
        const repuesto = await this.findById(id);
        const rta = await repuesto.update(changes);
        return rta;
    };

    /**
     * Funcion que elimina row por id en la tabla REPUESTOS
     * @param {Number} id 
     * @returns Object retorna objeto con id de la tabla eliminada
     */
    async delete(id) {        
        const repuesto = await this.findById(id);
        await repuesto.destroy();
        return { id };
    };
}

export default RepuestosService;