import Joi from 'joi';

const rut_colaborador = Joi.string().min(7).max(8);
const nombre_colaborador = Joi.string().min(3).max(30);
const appat_colaborador = Joi.string().min(3).max(30);
const apmat_colaborador = Joi.string().min(3).max(30);
const password_colaborador = Joi.string().min(8);
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Roles'.
// const roles_ID_rol = Joi.number().min().max();
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Direcciones'.
// const direcciones_ID_direcion = Joi.number().min().max();

const createColaboradorSchema = Joi.object({
    rut_colaborador: rut_colaborador.required(),    
    nombre_colaborador: nombre_colaborador.required(),
    appat_colaborador: appat_colaborador.required(),
    apmat_colaborador: apmat_colaborador.required(),
    password_colaborador: password_colaborador.required(),
    // roles_ID_rol: roles_ID_rol.required(),
    // direcciones_ID_direcion: direcciones_ID_direcion.required(),
});

const updateColaboradorSchema = Joi.object({
    rut_colaborador: rut_colaborador,    
    nombre_colaborador: nombre_colaborador,
    appat_colaborador: appat_colaborador,
    apmat_colaborador: apmat_colaborador,
    password_colaborador: password_colaborador,
    // roles_ID_rol: roles_ID_rol,
    // direcciones_ID_direcion: direcciones_ID_direcion,
});

const getColaboradorByid = Joi.object({
    rut_colaborador: rut_colaborador.required()
});

export {
    createColaboradorSchema,
    updateColaboradorSchema,
    getColaboradorByid
}