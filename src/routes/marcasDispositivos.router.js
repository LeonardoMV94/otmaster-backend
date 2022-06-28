import express from "express";
import MarcaDispositivosService from '../services/marcaDispositivos.service';
import validatorHandler from '../middlewares/validator.handler.js';
import { createMarcaDispositivoSchema, getMarcaDispositivoSchema } from '../schemas/marcaDispositivos.schema';

const router = express.Router();
const service = new MarcaDispositivosService();

router.get('/', async(req, res,next) => {
    try {        
        const marca = await service.find();
        res.json(marca);
    } catch (error) {
        next(error);
    }     
});

router.get('/:ID_marca',
    validatorHandler(getMarcaDispositivoSchema, 'params'),
    async (req, res, next) => {
        try {
            const { ID_marca } = req.params;
            const category = await service.findById(ID_marca);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/add/',
    validatorHandler(createMarcaDispositivoSchema, 'body'),
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

router.patch('/:ID_marca',
    async (req, res, next) => {
        try {
            const { ID_marca } = req.params;
            const body = req.body;
            const marca = await service.update(ID_marca, body);
            res.json(marca);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/delete/:ID_marca',
    async (req, res, next) => {
        try {
            const { ID_marca } = req.params;
            await service.delete(ID_marca);
            res.status(201).json({ID_marca});
        } catch (error) {
            next(error);
        }
    }
);

export default router;