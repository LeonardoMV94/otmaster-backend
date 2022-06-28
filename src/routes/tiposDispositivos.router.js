import express from "express";
import TipoDispositivosService from '../services/tipoDispositivos.service';
import validatorHandler from '../middlewares/validator.handler.js';
import { createTipoDispositivoSchema, getTipoDispositivoSchema } from '../schemas/tiposDispositivos.schema';

const router = express.Router();
const service = new TipoDispositivosService();

router.get('/', async(req, res,next) => {
    try {        
        const tipo = await service.find();
        res.json(tipo);
    } catch (error) {
        next(error);
    }     
});

router.get('/:ID_tipo',
    validatorHandler(getTipoDispositivoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { ID_tipo } = req.params;
            const category = await service.findById(ID_tipo);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/add/',
    validatorHandler(createTipoDispositivoSchema, 'body'),
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

router.patch('/:ID_tipo',
    async (req, res, next) => {
        try {
            const { ID_tipo } = req.params;
            const body = req.body;
            const tipo = await service.update(ID_tipo, body);
            res.json(tipo);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/delete/:ID_tipo',
    async (req, res, next) => {
        try {
            const { ID_tipo } = req.params;
            await service.delete(ID_tipo);
            res.status(201).json({ID_tipo});
        } catch (error) {
            next(error);
        }
    }
);

export default router;