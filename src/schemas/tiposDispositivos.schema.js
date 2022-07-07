import Joi from 'joi';

const ID_tipo = Joi.number().min(1);
const nombre_tipo = Joi.string();

const createTipoDispositivoSchema = Joi.object({ 
    nombre_tipo: nombre_tipo.required()
});

const updateTipoDispositivoSchema = Joi.object({
    nombre_tipo: nombre_tipo.required(),
});

const getTipoDispositivoByid = Joi.object({
    ID_tipo: ID_tipo.required()
});

export {
    createTipoDispositivoSchema,
    updateTipoDispositivoSchema,
    getTipoDispositivoByid
}