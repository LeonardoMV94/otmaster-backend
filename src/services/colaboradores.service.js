// import { MySqlConexion} from "./../libs/mysql.pool.js";
// const con = await MySqlConexion();
import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

const {models} = sequelize;

class ColaboradoresService {

    constructor(){

    };

    /**
     * Esta funcion registra un colaborador en la base de datos, verificando anteriormente si existe previamente
     * @param {Object} colaboradorObj El objeto JSON entregado por request en colaboradores.router
     * @returns {Object} Retorna feedback de creacion de colaborador
     */
    async create(colaboradorObj){
        const newColaborador = await models.Colaborador.create(colaboradorObj);
        return newColaborador;
    };

    /**
     * Esta funcion retorna todos los colaboradores
     * @returns {Object} Retorna todas las rows de la tabla COLABORADORES
     */
    async find(){
        const colaboradores = await models.Colaborador.findAll();
        return colaboradores;
    };
    
    /**
     * Esta funcion busca un colaborador por rut_colaborador (PrimaryKey) en la tabla COLABORADORES
     * @param {Number} id Es el primary key de colaborador
     * @returns {Object} retorna el row encontrado en bd
     */
    async findById(id){
        const colaborador = await models.Colaborador.findByPk(id);
        if(!colaborador){
            throw boom.notFound('colaborador not found');
        }
        return colaborador;
    };

    /**
     * Esta funcion actualiza los datos del  colaborador por rut_colaborador (PrimaryKey) en la tabla COLAORADORES  
     * @param {Number} rut El identificador de colaborador
     * @param {Object} changes Los datos a actualizar del colaborador
     * @returns {Object} Mensaje con feedback
     */
    async update(rut, changes){
        const colaborador = await this.findById(rut);
        const rta = await colaborador.update(changes);
        return rta;
    };

    /**
     * Esta funcion elimina un colaborador por rut_colaborador (PrimaryKey) en la tabla COLABORADORES
     * @param {Number} rut Es el rut_colaborador identificador
     * @returns {Object} Mensaje feedback
     */
    async delete(rut){
        const colaborador = await this.findById(rut);
        await colaborador.destroy();
        return { rut };
    };
}

export default ColaboradoresService;