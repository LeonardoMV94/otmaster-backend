import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js'

const {models} = sequelize;
class MarcaDispositivoService {

    constructor() {        
    };

    async create(marcaDispositivoObj) {
        const marcaDispositivo = await models.MarcaDispositivo.create(marcaDispositivoObj);
        return marcaDispositivo;
    };

    async find() {
        const marcaDispositivo = await models.MarcaDispositivo.findAll( {
            // include: ['tickets']
        });
        return marcaDispositivo;
    };

    async findById(id) {
        const marcaDispositivo = await models.MarcaDispositivo.findByPk(id);
        if (!marcaDispositivo){
            throw boom.notFound('Marca Dispositivo not found');
        }
        return marcaDispositivo;
    };

    async update(id_marca, changes) {
        const marcaDispositivo = await this.findById(id_marca);
        const rta = await marcaDispositivo.update(changes);
        return rta;
    };

    async delete(id_marca) {        
        const marcaDispositivo = await this.findById(id_marca);
        await marcaDispositivo.destroy();
        return { id_marca };
    };
}

export default MarcaDispositivoService;