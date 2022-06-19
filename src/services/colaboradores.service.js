import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js'
import bcrypt from 'bcrypt'

const {models} = sequelize;
class ColaboradoresService {

    constructor() {
        
    };

    async create(data) {
        const hash = await bcrypt.hash( data.password_colaborador, 10 )
        const newColaborador = await models.Colaborador.create( {
            ...data,
            password_colaborador: hash
        } );
        delete newColaborador.dataValues.password_colaborador
        return newColaborador;
    };

    async find() {
        const colaboradores = await models.Colaborador.findAll({
            attributes: {exclude: ['password_colaborador']},
            include: ['roles']            
        })
        
        return colaboradores
    }

    async findById(id) {
        const colaborador = await models.Colaborador.findByPk(id, {
            attributes: {exclude: ['password_colaborador']}
        })
        if (!colaborador){
            throw boom.notFound('colaborador not found')
        }
        return colaborador
    };

    async findForAuth(rutColaborador) {
        const colaborador = await models.Colaborador.findByPk(rutColaborador, {
            attributes: ['rut_colaborador','password_colaborador'],
            include: ['roles'] 
        })
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