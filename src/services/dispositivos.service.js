// import { MySqlConexion} from "./../libs/mysql.pool.js";
//const con = await MySqlConexion();
import boom from '@hapi/boom';
import sequelize from '../libs/sequelize.js';

const {models} = sequelize;

class DispositivosService {

    constructor(){

    };

    /**
     * Esta funcion registra un dispositivo en la base de datos, verificando anteriormente si existe previamente
     * @param {Object} dispositivoObj El objeto JSON entregado por request en dispositivos.router
     * @returns {Object} Retorna feedback de creacion de dispositivo
     */
     async create(dispositivoObj){
        const newDispositivo = await models.Dispositivo.create(dispositivoObj);
        return newDispositivo;
    };

    /**
     * Esta funcion retorna todos los dispositivos
     * @returns {Object} Retorna todas las rows de la tabla DISPOSITIVOS
     */
     async find(){
        const dispositivos = await models.Dispositivo.findAll({
            include: ["marcas","tipos"]
        });
        return dispositivos;
    };

    /**
     * Esta funcion busca un DISPOSITIVO por ID_dispostivo (PrimaryKey) en la tabla DISPOSITIVOS
     * @param {Number} id Es el primary key de dispositivo
     * @returns {Object} retorna el row encontrado en bd
     */
     async findById(id){
        const dispositivo = await models.Dispositivo.findByPk(id, {
            include: ["marcas","tipos"]
        });
        if(!dispositivo){
            throw boom.notFound('dispositivo not found');
        }
        return dispositivo;
    };

    /**
     * Esta funcion actualiza los datos del  dispositivo por ID_dispositivo (PrimaryKey) en la tabla DISPOSITIVOS     
     * @param {Number} id El identificador de dispositivo
     * @param {Object} changes Los datos a actualizar del dispositivo
     * @returns {Object} Mensaje con feedback
     */
     async update(id, changes){
        const dispositivo = await this.findById(id);
        const rta = await dispositivo.update(changes);
        return rta;
    };

    /**
     * Esta funcion elimina un dispositivo por ID_dispositivo (PrimaryKey) en la tabla DISPOSITIVOS
     * @param {Number} id Es el Id_dispositivo identificador
     * @returns {Object} Mensaje feedback
     */
     async delete(id){
        const dispositivo = await this.findById(id);
        await dispositivo.destroy();
        return { id };
    };
}

export default DispositivosService;