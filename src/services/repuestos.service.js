import boom from '@hapi/boom';
import sequelize from './../libs/sequelize.js'

const {models} = sequelize;
class RepuestosService {

    constructor() {
        
    };

    async create(repuestoObj) {
        const newRepuesto = await models.Repuesto.create(repuestoObj);
        return newRepuesto;
    };

    async find() {
        const repuestos = await models.Repuesto.findAll();
        return repuestos;
    };

    async findById(id) {
        const repuesto = await models.Repuesto.findByPk(id);
        if (!repuesto){
            throw boom.notFound('Repuesto not found');
        }
        return repuesto;
    };

    async update(id_repuesto, changes) {
        const repuesto = await this.findById(id_repuesto);
        const rta = await repuesto.update(changes);
        return rta;
    };

    async delete(id_repuesto) {        
        const Repuesto = await this.findById(id_repuesto);
        await Repuesto.destroy();
        return { id_repuesto };
    };
}

export default RepuestosService;