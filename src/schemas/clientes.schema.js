import Joi from 'joi';

const id_cliente = Joi.number();
const rut_cliente = Joi.string().min(9).max(10)
const nombre_cliente = Joi.string().min(3).max(30) ;
const appat_cliente = Joi.string().min(3).max(30);
const apmat_cliente = Joi.string().min(3).max(30);
const correo_cliente = Joi.email();
const tel_cliente = Joi.string();

const createClienteSchema = Joi.object({
    rut_cliente: rut_cliente.required(),    
    nombre_cliente: nombre_cliente.required(),
    appat_cliente: appat_cliente.required(),
    apmat_cliente: apmat_cliente.required(),
    correo_cliente: correo_cliente.required(),
    tel_cliente: tel_cliente.required(),
});

const updateClienteSchema = Joi.object({
    rut_cliente: rut_cliente,    
    nombre_cliente: nombre_cliente,
    appat_cliente: appat_cliente,
    apmat_cliente: apmat_cliente,
    correo_cliente: correo_cliente,
    tel_cliente: tel_cliente,
});

const getClienteByid = Joi.object({
    id_cliente: id_cliente.required()
});

export {
    createClienteSchema,
    updateClienteSchema,
    getClienteByid
}