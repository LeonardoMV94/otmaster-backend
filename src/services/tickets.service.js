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
        const tickets = await models.Ticket.findAll();
        return tickets;
    };

    async countEstados() {
        const cant1 = await models.Ticket.count({where: {estado_ticket: 1}})
        const cant2 = await models.Ticket.count({where: {estado_ticket: 2}})
        const cant3 = await models.Ticket.count({where: {estado_ticket: 3}})
        const cant4 = await models.Ticket.count({where: {estado_ticket: 4}})
        return [
            {
                id: 1,
                tipo: 'Abierto',
                cantidad: cant1
            },
            {
                id: 2,
                tipo: 'En Proceso',
                cantidad: cant2
            },{
                id: 1,
                tipo: 'Cerrado',
                cantidad: cant3
            },{
                id: 1,
                tipo: 'Cancelado',
                cantidad: cant4
            },
        ]
    }
    
    /**
     * Esta funcion busca un ticket por ID_ticket (PrimaryKey) en la tabla TICKETS
     * @param {Number} id Es el primary key de ticket
     * @returns {Object} retorna el row encontrado en bd
     */
    async findById(id){
        const ticket = await models.Ticket.findByPk(id, {
            include: ['clientes', 'colaboradores','dispositivos', 'repuestosticket']
        });
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