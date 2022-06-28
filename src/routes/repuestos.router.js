import express from "express";
import RepuestosService from '../services/repuestos.service';
import validatorHandler from '../middlewares/validator.handler.js';
import { createRepuestoSchema, updateRepuestoSchema, getRepuestoSchema } from '../schemas/repuestos.schema';

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

router.get('/:ID_repuesto',
    validatorHandler(getRepuestoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { ID_repuesto } = req.params;
            const category = await service.findById(ID_repuesto);
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
            const newCategory = await service.create(body);
            res.status(201).json(newCategory);
        } catch (error) {
            next(error);
        }
    }
);

router.patch('/:ID_repuesto',
    validatorHandler(getRepuestoSchema, 'params'),
    validatorHandler(updateRepuestoSchema, 'body'),
    async (req, res, next) => {
        try {
            const { ID_repuesto } = req.params;
            const body = req.body;
            const category = await service.update(ID_repuesto, body);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/delete/:ID_repuesto',
    validatorHandler(getRepuestoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { ID_repuesto } = req.params;
            await service.delete(ID_repuesto);
            res.status(201).json({ID_repuesto});
        } catch (error) {
            next(error);
        }
    }
);

export default router;