import Joi from 'joi';

const ID_marca = Joi.number().min().max();
const nombre_marca = Joi.string();

const createMarcaDispositivoSchema = Joi.object({ 
    nombre_marca: nombre_marca.required()
});

const updateMarcaDispositivoSchema = Joi.object({
    nombre_marca: nombre_marca,
});

const getMarcaDispositivoByid = Joi.object({
    ID_marca: ID_marca.required()
});

export {
    createMarcaDispositivoSchema,
    updateMarcaDispositivoSchema,
    getMarcaDispositivoByid
}