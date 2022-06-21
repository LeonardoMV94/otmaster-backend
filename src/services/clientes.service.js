import boom from '@hapi/boom';
import sequelize from './../libs/sequelize.js'

const {models} = sequelize;
class ClientesService {

    constructor() {
        
    };

    /**
     * Funcion que crea un nuevo cliente en la tabla CLIENTES
     * @param {Object} clienteObj Nuevo cliente
     * @returns Object newCliente 
     */
    async create(clienteObj) {
        const newCliente = await models.Cliente.create(clienteObj);
        return newCliente;
    };

    /**
     * Funcion que retorna todos los clientes en la tabla CLIENTES
     * @returns Array retorna arreglo de objetos 
     */
    async find() {
        const clientes = await models.Cliente.findAll()
        return clientes
    }

    /**
     * Funcion que retorna un cliente por id
     * @param {Number} id Corresponde a rut_cliente en la tabla CLIENTES
     * @returns Object retorna cliente || retorna error not found
     */
    async findById(id) {
        const cliente = await models.Cliente.findByPk(id)
        if (!cliente){
            throw boom.notFound('user not found')
        }
        return cliente
    };

    /**
     * Funcion que actualiza columnas de la tabla CLIENTES
     * @param {Number} rut Id de cliente
     * @param {Object} changes Cambios parciales de cliente
     * @returns Object Retorna cliente actualizado
     */
    async update(rut, changes) {
        const cliente = await this.findById(rut)
        const rta = await cliente.update(changes)
        return rta
    };

    /**
     * Funcion que elimina row por id en la tabla CLIENTES
     * @param {Number} rut 
     * @returns Object retorna objeto con id de la tabla eliminada
     */
    async delete(rut) {        
        const cliente = await this.findById(rut)
        await cliente.destroy();
        return { rut }
    };
}

export default ClientesService;