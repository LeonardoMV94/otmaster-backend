import Joi from 'joi';

const ID_tipo = Joi.number().integer();
const nombre_tipo = Joi.string().min(3).max(50);

const createTipoDispositivoSchema = Joi.object({
    nombre_tipo: nombre_tipo.required(),
});

const getTipoDispositivoSchema = Joi.object({
    ID_tipo : ID_tipo.required()
});

export { createTipoDispositivoSchema, getTipoDispositivoSchema }