// import { MySqlConexion} from "./../libs/mysql.pool.js";
// const con = await MySqlConexion();
import boom from '@hapi/boom';
//import { Cliente } from '../db/models/cliente.model.js';
//import { Colaborador } from '../db/models/colaborador.model.js';
//import { Dispositivo } from '../db/models/dispositivo.model.js';
import sequelize from '../libs/sequelize.js';

const {models} = sequelize;

class TicketsService {

    constructor(){

    };

    /**
     * Esta funcion registra un ticket en la base de datos, verificando anteriormente si existe previamente
     * @param {Object} ticketObj El objeto JSON entregado por request en tickets.router
     * @returns {Object} Retorna feedback de creacion de ticket
     */
    async create(ticketObj){
        const newTicket = await models.Ticket.create(ticketObj);
        return newTicket;
    };

    /**
     * Esta funcion retorna todos los tickets
     * @returns {Object} Retorna todas las rows de la tabla TICKETS
     */
    async find(){
        const tickets = await models.Ticket.findAll(
        //{
            // JOIN foreign Key 
            //include : ['items']
                // model: Colaborador,
                // model: Dispositivo            
        //}
        );
        return tickets;
    };
    
    /**
     * Esta funcion busca un ticket por ID_ticket (PrimaryKey) en la tabla TICKETS
     * @param {Number} id Es el primary key de ticket
     * @returns {Object} retorna el row encontrado en bd
     */
    async findById(id){
        const ticket = await models.Ticket.findByPk(id);
        if(!ticket){
            throw boom.notFound('ticket not found');
        }
        return ticket;
    };

    /**
     * Esta funcion actualiza los datos del  ticket por ID_ticket (PrimaryKey) en la tabla TICKETS  
     * @param {Number} id El identificador de ticket
     * @param {Object} changes Los datos a actualizar del ticket
     * @returns {Object} Mensaje con feedback
     */
    async update(id, changes){
        const ticket = await this.findById(id);
        const rta = await ticket.update(changes);
        return rta;
    };

    /**
     * Esta funcion elimina un ticket por ID_ticket (PrimaryKey) en la tabla TICKETS
     * @param {Number} id Es el ID_ticket identificador
     * @returns {Object} Mensaje feedback
     */
    async delete(id){
        const ticket = await this.findById(id);
        await ticket.destroy();
        return { id };
    };
}

export default TicketsService;