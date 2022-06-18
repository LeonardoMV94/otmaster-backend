import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js'

const {models} = sequelize;
class ColaboradoresService {

    constructor() {
        
    };

    async create(colaboradorObj) {
        const newColaborador = await models.Colaboradores.create(colaboradorObj);
        return newColaborador;
    };

    async find() {
        const colaboradores = await models.Colaborador.findAll()
        return colaboradores
    }

    async findById(id) {
        const colaborador = await models.Colaborador.findByPk(id)
        if (!colaborador){
            throw boom.notFound('colaborador not found')
        }
        return colaborador
    };

    async update(rut, changes) {
        const colaborador = await this.findById(rut)
        const rta = await colaborador.update(changes)
        return rta
    };

    async delete(rut) {        
        const colaborador = await this.findById(rut)
        await colaborador.destroy();
        return { rut }
    };
}

export default ColaboradoresService;