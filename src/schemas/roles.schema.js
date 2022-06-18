import Joi from 'joi';

const id_rol = Joi.number().integer()
const nombre_rol = Joi.string().min(3).max(30) 

const createRolSchema = Joi.object({
    id_rol: id_rol.required(),
    nombre_rol: nombre_rol.required(),
})

export { createRolSchema }