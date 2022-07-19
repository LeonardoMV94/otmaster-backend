import express from "express";
import RepuestosService from '../services/repuestos.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import { createRepuestoSchema, getRepuestoSchema, updateRepuestoSchema } from '../schemas/repuestos.schema.js';

const router = express.Router();
const service = new RepuestosService();

router.get('/', async(req, res,next) => {
    try {        
        const repuesto = await service.find();
        res.json(repuesto);
    } catch (error) {
        next(error);
    }     
});

router.get('/:id_repuesto',
    validatorHandler(getRepuestoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_rol } = req.params;
            const category = await service.findById(id_rol);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/add/',
    validatorHandler(createRepuestoSchema, 'body'),
    async (req, res, next) => {
        try {
            const body = req.body;
            const newRepuesto = await service.create(body);
            res.status(201).json(newRepuesto);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:id_repuesto',
    validatorHandler(getRepuestoSchema, 'params'),
    validatorHandler(updateRepuestoSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_repuesto } = req.params;
            const body = req.body;
            const rol = await service.update(id_repuesto, body);
            res.json(rol);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/delete/:id_repuesto',
    validatorHandler(getRepuestoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id_repuesto } = req.params;
            await service.delete(id_repuesto);
            res.status(201).json({id_repuesto});
        } catch (error) {
            next(error);
        }
    }
);

export default router;