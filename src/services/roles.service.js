import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js'

const {models} = sequelize;
class RolesService {

    constructor() {
        
    };

    async create(rolObj) {
        const newRol = await models.Rol.create(rolObj);
        return newRol;
    };

    async find() {
        const roles = await models.Rol.findAll()
        return roles
    }

    async findById(id) {
        const rol = await models.Rol.findByPk(id, {
            include: ['colaboradores']
        })
        if (!rol){
            throw boom.notFound('rol not found')
        }
        return rol
    };

    async update(id, changes) {
        const rol = await this.findById(id)
        const rta = await rol.update(changes)
        return rta
    };

    async delete(id) {        
        const rol = await this.findById(id)
        await rol.destroy();
        return { id }
    };
}

export default RolesService;