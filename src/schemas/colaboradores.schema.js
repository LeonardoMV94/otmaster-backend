import Joi from 'joi';

const rut_colaborador = Joi.number().integer().min(7).max(8)
const password_colaborador = Joi.string().min(8).max(30) 
const nombre_colaborador = Joi.string().min(3).max(30) 
const apmat_colaborador = Joi.string().min(3).max(30) 
const appat_colaborador = Joi.string().min(3).max(30) 
const roles_id_rol = Joi.number().integer()

const createColaboradorSchema = Joi.object({
    rut_colaborador: rut_colaborador.required(),
    password_colaborador: password_colaborador.required(),
    nombre_colaborador: nombre_colaborador.required(),
    apmat_colaborador: apmat_colaborador.required(),
    appat_colaborador: appat_colaborador.required(),
    roles_id_rol: roles_id_rol.required()
})

const updateColaboradoSchema = Joi.object({
    password_colaborador: password_colaborador,
    nombre_colaborador: nombre_colaborador,
    apmat_colaborador: apmat_colaborador,
    appat_colaborador: appat_colaborador,
    roles_id_rol: roles_id_rol
})

const getColaboradorSchema = Joi.object({
    rut_colaborador: rut_colaborador.required()
})

export { createColaboradorSchema, updateColaboradoSchema, getColaboradorSchema }