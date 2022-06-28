import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

const {models} = sequelize;
class MarcaDispositivosService {

    constructor() {
        
    };

    async create(marcaObj) {
        const newMarca = await models.MarcaDispositivo.create(marcaObj);
        return newMarca;
    };

    async find() {
        const marcas = await models.MarcaDispositivo.findAll();
        return marcas;
    }

    async findById(id) {
        const marca = await models.MarcaDispositivo.findByPk(id, {
            include: ['dispositivos']
        });
        if (!marca){
            throw boom.notFound('marca not found');
        }
        return marca;
    };

    async update(id, changes) {
        const marca = await this.findById(id);
        const rta = await marca.update(changes);
        return rta;
    };

    async delete(id) {        
        const marca = await this.findById(id);
        await marca.destroy();
        return { id };
    };
}

export default MarcaDispositivosService;