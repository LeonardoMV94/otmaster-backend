import Joi from 'joi';

const ID_marca = Joi.number().integer();
const nombre_marca = Joi.string().min(3).max(50);

const createMarcaDispositivoSchema = Joi.object({
    nombre_marca: nombre_marca.required(),
});

const getMarcaDispositivoSchema = Joi.object({
    ID_marca : ID_marca.required()
});

export { createMarcaDispositivoSchema, getMarcaDispositivoSchema }