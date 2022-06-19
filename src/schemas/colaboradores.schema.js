import Joi from 'joi';

const rut_colaborador = Joi.number().min(1000000).max(30000000)
const password_colaborador = Joi.string().min(8).max(30) 
const nombre_colaborador = Joi.string().min(3).max(30) 
const apmat_colaborador = Joi.string().min(3).max(30) 
const appat_colaborador = Joi.string().min(3).max(30) 
const rolesIdRol = Joi.number().integer()

const createColaboradorSchema = Joi.object({
    rut_colaborador: rut_colaborador.required(),
    password_colaborador: password_colaborador.required(),
    nombre_colaborador: nombre_colaborador.required(),
    apmat_colaborador: apmat_colaborador.required(),
    appat_colaborador: appat_colaborador.required(),
    rolesIdRol: rolesIdRol.required()
})

const updateColaboradoSchema = Joi.object({
    password_colaborador: password_colaborador,
    nombre_colaborador: nombre_colaborador,
    apmat_colaborador: apmat_colaborador,
    appat_colaborador: appat_colaborador,
    rolesIdRol: rolesIdRol
})

const getColaboradorSchema = Joi.object({
    rut_colaborador: rut_colaborador.required()
})

export { createColaboradorSchema, updateColaboradoSchema, getColaboradorSchema }