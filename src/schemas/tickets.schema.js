import Joi from 'joi';

const ID_ticket = Joi.number().min().max();
const diagnostico_ticket = Joi.string().min(3).max(300);
const resolucion_ticket = Joi.string().min(3).max(300);
const problema_ticket = Joi.string().min(3).max(300);
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Estado_tickets'.
// const estado_tickets_ID_estado = Joi.number().min(3).max(30);
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Dispositivos'.
// const dispositivos_ID_dispositivo = Joi.number().min(8);
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Clientes'.
// const clientes_ID_cliente = Joi.number().min().max();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Colaboradores'.
// const colaboradores_ID_colaborador = Joi.number().min().max();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Repuestos'.
// const repuestos_ID_repuesto = Joi.number().min().max();

const createTicketSchema = Joi.object({
    ID_ticket: ID_ticket.required(),    
    diagnostico_ticket: diagnostico_ticket,
    resolucion_ticket: resolucion_ticket,
    problema_ticket: problema_ticket.required()
    // estado_tickets_ID_estado: estado_tickets_ID_estado.required(),
    // dispositivos_ID_dispositivo: dispositivos_ID_dispositivo.required(),
    // clientes_ID_cliente: clientes_ID_cliente.required(),
    // colaboradores_ID_colaborador: colaboradores_ID_colaborador.required(),
    // repuestos_ID_repuesto: repuestos_ID_repuesto.required(),
});

const updateTicketSchema = Joi.object({
    ID_ticket: ID_ticket,
    diagnostico_ticket: diagnostico_ticket,
    resolucion_ticket: resolucion_ticket,
    problema_ticket: problema_ticket
    // estado_tickets_ID_estado: estado_tickets_ID_estado,
    // dispositivos_ID_dispositivo: dispositivos_ID_dispositivo,
    // clientes_ID_cliente: clientes_ID_cliente,
    // colaboradores_ID_colaborador: colaboradores_ID_colaborador,
    // repuestos_ID_repuesto: repuestos_ID_repuesto,
});

const getTicketByid = Joi.object({
    ID_ticket: ID_ticket.required()
});

export {
    createTicketSchema,
    updateTicketSchema,
    getTicketByid
}