import Joi from 'joi';

const id_dispositivo = Joi.number().positive();
const num_serie_dispositivo = Joi.string().alphanum();
const modelo = Joi.string().min(3).max(30);

// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Marcas'.
const marcas_dispositivos_id_marcas = Joi.number().positive();

// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Tipos'.
const tipos_dispositivos_id_tipos = Joi.number().positive();

const createDispositivoSchema = Joi.object({   
    num_serie_dispositivo:          num_serie_dispositivo.required(),
    modelo:                         modelo.required(),
    marcas_dispositivos_id_marcas:  marcas_dispositivos_id_marcas.required(),
    tipos_dispositivos_id_tipos:    tipos_dispositivos_id_tipos.required(),
});

const updateDispositivoSchema = Joi.object({
    num_serie_dispositivo:          num_serie_dispositivo,
    modelo:                         modelo,
    marcas_dispositivos_id_marcas:  marcas_dispositivos_id_marcas,
    tipos_dispositivos_id_tipos:    tipos_dispositivos_id_tipos,
});

const getDispositivoByid = Joi.object({
    id_dispositivo: id_dispositivo.required()
});

export {
    createDispositivoSchema,
    updateDispositivoSchema,
    getDispositivoByid
}