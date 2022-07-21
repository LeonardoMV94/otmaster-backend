import Joi from 'joi';

const id_marca = Joi.number().positive();
const nombre_marca = Joi.string();

const createMarcaDispositivoSchema = Joi.object({ 
    nombre_marca: nombre_marca.required()
});

const updateMarcaDispositivoSchema = Joi.object({
    nombre_marca: nombre_marca,
});

const getMarcaDispositivoByid = Joi.object({
    id_marca: id_marca.required()
});

export {
    createMarcaDispositivoSchema,
    updateMarcaDispositivoSchema,
    getMarcaDispositivoByid
}