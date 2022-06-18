import express from "express";
import ColaboradoresService from '../services/colaboradores.service.js'
import validatorHandler from './../middlewares/validator.handler.js'
import { createColaboradorSchema, updateColaboradoSchema, getColaboradorSchema } from './../schemas/colaboradores.schema.js'

const router = express.Router();
const service = new ColaboradoresService();

router.get('/', async(req, res,next) => {
    try {        
        const colab = await service.find();
        res.json(colab)
        // if (results.length > 0) {
        //     res.json(results);
        // } else {
        //     res.json({mensaje: "no hay colaboradores"})
        // }
    } catch (error) {
        next(error)
    }     
});

router.get('/:id',
    validatorHandler(getColaboradorSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await service.findOne(id);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
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

router.patch('/:id',
    validatorHandler(getColaboradorSchema, 'params'),
    validatorHandler(updateColaboradoSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const category = await service.update(id, body);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
    validatorHandler(getColaboradorSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            await service.delete(id);
            res.status(201).json({id});
        } catch (error) {
            next(error);
        }
    }
);

export default router;