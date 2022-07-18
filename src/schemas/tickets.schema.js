import Joi from 'joi';

const id_ticket = Joi.number().positive();
const diagnostico_ticket = Joi.string().max(500);
const resolucion_ticket = Joi.string().max(500);
const problema_ticket = Joi.string().max(500);

// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Estado_tickets'.
const estado_ticket = Joi.number().positive();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Dispositivos'.
const dispositivosIdDispositivo = Joi.number().positive();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Clientes'.
const clientesRutCliente = Joi.number().positive();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Colaboradores'.
const colaboradoresRutColaborador = Joi.number().positive();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Repuestos'.
// const repuestosIdRepuesto = Joi.number().positive();

const createTicketSchema = Joi.object({
    problema_ticket: problema_ticket.required(),
    diagnostico_ticket: diagnostico_ticket,
    resolucion_ticket: resolucion_ticket,
    estado_ticket: estado_ticket.required(),
    dispositivosIdDispositivo: dispositivosIdDispositivo.required(),
    clientesRutCliente: clientesRutCliente.required(),
    colaboradoresRutColaborador: colaboradoresRutColaborador.required()
});

const updateTicketSchema = Joi.object({
    diagnostico_ticket: diagnostico_ticket,
    resolucion_ticket: resolucion_ticket,
    problema_ticket: problema_ticket,
    estado_ticket: estado_ticket,
    dispositivosIdDispositivo: dispositivosIdDispositivo,
    clientesRutCliente: clientesRutCliente,
    colaboradoresRutColaborador: colaboradoresRutColaborador,
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