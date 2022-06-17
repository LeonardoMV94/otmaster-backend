import Joi from 'joi';

const ID_dispositivo = Joi.number().min().max();
const num_serie_dispositivo = Joi.number().min();
const modelo = Joi.string().min(3).max(30);
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Marcas'.
// const marcas_dispositivos_ID_marcas = Joi.number().min(3).max(30);
// 'Foreign Key' que hace referencia a la 'Primary Key' de la tabla 'Tipos'.
// const tipos_dispositivos_ID_tipos = Joi.number().min(3).max(30);

const createDispositivoSchema = Joi.object({
    ID_dispositivo: ID_dispositivo.required(),    
    num_serie_dispositivo: num_serie_dispositivo.required(),
    modelo: modelo.required(),
    // marcas_dispositivos_ID_marcas: marcas_dispositivos_ID_marcas.required(),
    // tipos_dispositivos_ID_tipos: tipos_dispositivos_ID_tipos.required(),
});

const updateDispositivoSchema = Joi.object({
    ID_dispositivo: ID_dispositivo,    
    num_serie_dispositivo: num_serie_dispositivo,
    modelo: modelo,
    // marcas_dispositivos_ID_marcas: marcas_dispositivos_ID_marcas,
    // tipos_dispositivos_ID_tipos: tipos_dispositivos_ID_tipos,
});

const getDispositivoByid = Joi.object({
    ID_dispositivo: ID_dispositivo.required()
});

export {
    createDispositivoSchema,
    updateDispositivoSchema,
    getDispositivoByid
}