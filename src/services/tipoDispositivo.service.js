import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js'

const {models} = sequelize;
class TipoDispositivoService {

    constructor() {        
    };

    async create(tipoDispositivo) {
        const newTD = await models.TipoDispositivo.create(tipoDispositivo);
        return newTD;
    };

    async find() {
        const tipoDispositivos = await models.TipoDispositivo.findAll( {
            // include: ['tickets']
        });
        return tipoDispositivos;
    };

    async findById(id) {
        const tipoDispositivo = await models.TipoDispositivo.findByPk(id);
        if (!tipoDispositivo){
            throw boom.notFound('Tipo Dispositivo not found');
        }
        return tipoDispositivo;
    };

    async update(id, changes) {
        const tipoDispositivo = await this.findById(id);
        const rta = await tipoDispositivo.update(changes);
        return rta;
    };

    async delete(rut) {        
        const tipoDispositivo = await this.findById(rut);
        await tipoDispositivo.destroy();
        return { rut };
    };
}

export default TipoDispositivoService;