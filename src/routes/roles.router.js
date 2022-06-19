import express from "express";
import RolesService from '../services/roles.service.js'
import validatorHandler from '../middlewares/validator.handler.js'
import { createRolSchema, getRolSchema } from '../schemas/roles.schema.js'

const router = express.Router();
const service = new RolesService();

router.get('/', async(req, res,next) => {
    try {        
        const rol = await service.find();
        res.json(rol)
    } catch (error) {
        next(error)
    }     
});

router.get('/:id',
    validatorHandler(getRolSchema, 'params'),
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const category = await service.findById(id);
            res.json(category);
        } catch (error) {
            next(error);
        }
    }
);

router.post('/',
    validatorHandler(createRolSchema, 'body'),
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
    async (req, res, next) => {
        try {
            const { id } = req.params;
            const body = req.body;
            const rol = await service.update(id, body);
            res.json(rol);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/:id',
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