import Joi from 'joi';

const ID_repuesto = Joi.number().integer();
const repuesto = Joi.string().min(3).max(50);

const createRepuestoSchema = Joi.object({
    ID_repuesto: ID_repuesto.required(),
    repuesto: repuesto.required(),
});

const updateRepuestoSchema = Joi.object({
    ID_repuesto: ID_repuesto,    
    repuesto: repuesto,
});

const getRepuestoSchema = Joi.object({
    ID_repuesto : ID_repuesto.required()
});

export { createRepuestoSchema, updateRepuestoSchema, getRepuestoSchema }