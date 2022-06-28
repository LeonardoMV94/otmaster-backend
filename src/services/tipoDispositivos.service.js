import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

const {models} = sequelize;
class TipoDispositivosService {

    constructor() {
        
    };

    async create(tipoObj) {
        const newTipo = await models.TipoDispositivo.create(tipoObj);
        return newTipo;
    };

    async find() {
        const tipos = await models.TipoDispositivo.findAll();
        return tipos;
    }

    async findById(id) {
        const tipo = await models.TipoDispositivo.findByPk(id, {
            include: ['dispositivos']
        });
        if (!tipo){
            throw boom.notFound('tipo not found');
        }
        return tipo;
    };

    async update(id, changes) {
        const tipo = await this.findById(id);
        const rta = await tipo.update(changes);
        return rta;
    };

    async delete(id) {        
        const tipo = await this.findById(id);
        await tipo.destroy();
        return { id };
    };
}

export default TipoDispositivosService;