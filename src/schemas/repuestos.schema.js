import Joi from 'joi';

const id_repuesto = Joi.number().positive();
const repuesto = Joi.string().min(3).max(25);

const createRepuestoSchema = Joi.object({
    repuesto: repuesto.required(),
});

const updateRepuestoSchema = Joi.object({
    repuesto: repuesto,
});

const getRepuestoSchema = Joi.object({
    id_repuesto : id_repuesto.required()
});

export { createRepuestoSchema, getRepuestoSchema, updateRepuestoSchema }