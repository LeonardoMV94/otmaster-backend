import Joi from 'joi';

const id_ticket = Joi.number().positive();
const diagnostico_ticket = Joi.string().min(3).max(500);
const resolucion_ticket = Joi.string().min(3).max(500);
const problema_ticket = Joi.string().min(3).max(500);

// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Estado_tickets'.
const estado_ticket = Joi.number().positive();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Dispositivos'.
const dispositivosIdDispositivo = Joi.number().positive();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Clientes'.
const clientesIdCliente = Joi.number().positive();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Colaboradores'.
const colaboradoresIdColaborador = Joi.number().positive();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Repuestos'.
// const repuestosIdRepuesto = Joi.number().positive();

const createTicketSchema = Joi.object({
    problema_ticket: problema_ticket.required(),
    diagnostico_ticket: diagnostico_ticket,
    resolucion_ticket: resolucion_ticket,
    estado_ticket: estado_ticket.required(),
    dispositivosIdDispositivo: dispositivosIdDispositivo.required(),
    clientesIdCliente: clientesIdCliente.required(),
    colaboradoresIdColaborador: colaboradoresIdColaborador.required()
});

const updateTicketSchema = Joi.object({
    diagnostico_ticket: diagnostico_ticket,
    resolucion_ticket: resolucion_ticket,
    problema_ticket: problema_ticket,
    estado_ticket: estado_ticket,
    dispositivosIdDispositivo: dispositivosIdDispositivo,
    clientesIdCliente: clientesIdCliente,
    colaboradoresIdColaborador: colaboradoresIdColaborador,
    //repuestosIdRepuesto: repuestosIdRepuesto,
});

const getTicketByid = Joi.object({
    id_ticket: id_ticket.required()
});

export {
    createTicketSchema,
    updateTicketSchema,
    getTicketByid
}