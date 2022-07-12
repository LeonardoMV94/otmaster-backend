import Joi from 'joi';

const id_dispositivo = Joi.number().positive();
const num_serie_dispositivo = Joi.string().alphanum();
const modelo = Joi.string().min(3).max(30);

// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Marcas'.
const marcasDispositivosIdMarcas = Joi.number().positive();

// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Tipos'.
const tiposDispositivosIdTipos = Joi.number().positive();

const createDispositivoSchema = Joi.object({   
    num_serie_dispositivo:          num_serie_dispositivo.required(),
    modelo:                         modelo.required(),
    marcasDispositivosIdMarcas:     marcasDispositivosIdMarcas.required(),
    tiposDispositivosIdTipos:    tiposDispositivosIdTipos.required(),
});

const updateDispositivoSchema = Joi.object({
    num_serie_dispositivo:          num_serie_dispositivo,
    modelo:                         modelo,
    marcasDispositivosIdMarcas:     marcasDispositivosIdMarcas,
    tiposDispositivosIdTipos:       tiposDispositivosIdTipos,
});

const getDispositivoByid = Joi.object({
    id_dispositivo: id_dispositivo.required()
});

export {
    createDispositivoSchema,
    updateDispositivoSchema,
    getDispositivoByid
}