import express from "express";
import ColaboradoresService from '../services/colaboradores.service.js';
import validatorHandler from './../middlewares/validator.handler.js';
import { createColaboradorSchema, updateColaboradoSchema, getColaboradorSchema } from './../schemas/colaboradores.schema.js';

const router = express.Router();
const service = new ColaboradoresService();

router.get('/', async(req, res,next) => {
    try {        
        const colab = await service.find();
        res.json(colab);
    } catch (error) {
        next(error);
    }     
});

router.get('/:rut_colaborador',
    validatorHandler(getColaboradorSchema, 'params'),
    async (req, res, next) => {
        try {
            const { rut_colaborador } = req.params;
            const category = await service.findById(rut_colaborador);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/add/',
    validatorHandler(createColaboradorSchema, 'body'),
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

router.patch('/:rut_colaborador',
    validatorHandler(getColaboradorSchema, 'params'),
    validatorHandler(updateColaboradoSchema, 'body'),
    async (req, res, next) => {
        try {
            const { rut_colaborador } = req.params;
            const body = req.body;
            const category = await service.update(rut_colaborador, body);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/delete/:rut_colaborador',
    validatorHandler(getColaboradorSchema, 'params'),
    async (req, res, next) => {
        try {
            const { rut_colaborador } = req.params;
            await service.delete(rut_colaborador);
            res.status(201).json({rut_colaborador});
        } catch (error) {
            next(error);
        }
    }
);

export default router;