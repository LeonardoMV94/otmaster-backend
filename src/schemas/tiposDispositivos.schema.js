import Joi from 'joi';

const id_tipo = Joi.number().positive();
const nombre_tipo = Joi.string();

const createTipoDispositivoSchema = Joi.object({ 
    nombre_tipo: nombre_tipo.required()
});

const updateTipoDispositivoSchema = Joi.object({
    nombre_tipo: nombre_tipo.required(),
});

const getTipoDispositivoByid = Joi.object({
    id_tipo: id_tipo.required()
});

export {
    createTipoDispositivoSchema,
    updateTipoDispositivoSchema,
    getTipoDispositivoByid
}