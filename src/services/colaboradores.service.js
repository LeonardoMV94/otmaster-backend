import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

const {models} = sequelize;
class ColaboradoresService {

    constructor() {
        
    };

    /**
     * Esta funcion crea un nuevo colaborador en la tabla COLABORADORES con contraseña encriptada
     * @param {Object} data Es el objeto que contiene los datos de un nuevo colaborador
     * @returns newColaborador
     */
    async create(data) {
        const hash = await bcrypt.hash( data.password_colaborador, 10 );
        const newColaborador = await models.Colaborador.create( {
            ...data,
            password_colaborador: hash
        });
        delete newColaborador.dataValues.password_colaborador;
        return newColaborador;
    };

    /**
     * Funcion que busca todos los colaboradores y los retorna
     * @returns Array retorna array de objetos excluyendo contraseña y haciendo join con roles
     */
    async find() {
        const colaboradores = await models.Colaborador.findAll({
            attributes: {exclude: ['password_colaborador']},
            include: ['roles']            
        });
        
        return colaboradores;
    }

    /**
     * Funcion que retorna colaborador segun ID de la tabla COLABORADORES
     * @param {Number} id 
     * @returns colaborador Retorna colaborador excluyendo contraseña
     */
    async findById(id) {
        const colaborador = await models.Colaborador.findByPk(id, {
            attributes: {exclude: ['password_colaborador']}
        });
        if (!colaborador){
            throw boom.notFound('colaborador not found');
        }
        return colaborador;
    };

    async findForAuth(rutColaborador) {
        const colaborador = await models.Colaborador.findByPk(rutColaborador, {
            attributes: ['rut_colaborador','password_colaborador'],
            include: ['roles'] 
        });
        if (!colaborador){
            throw boom.notFound('colaborador not found');
        }
        return colaborador;
    };

    async update(rut, changes) {
        const colaborador = await this.findById(rut);
        const rta = await colaborador.update(changes);
        return rta;
    };

    async delete(rut) {        
        const colaborador = await this.findById(rut);
        await colaborador.destroy();
        return { rut };
    };
}

export default ColaboradoresService;