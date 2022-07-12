import Joi from 'joi';

const id_rol = Joi.number().integer();
const nombre_rol = Joi.string().min(3).max(30);

const createRolSchema = Joi.object({
    nombre_rol: nombre_rol.required(),
});

const updateRolSchema = Joi.object({
    nombre_rol: nombre_rol,
});

const getRolSchema = Joi.object({
    id_rol : id_rol.required()
});

export { createRolSchema, getRolSchema, updateRolSchema }