import express from "express";
import RolesService from '../services/roles.service.js';
import validatorHandler from '../middlewares/validator.handler.js';
import { createRolSchema, getRolSchema } from '../schemas/roles.schema.js';

const router = express.Router();
const service = new RolesService();

router.get('/', async(req, res,next) => {
    try {        
        const rol = await service.find();
        res.json(rol);
    } catch (error) {
        next(error);
    }     
});

router.get('/:id_rol',
    validatorHandler(getRolSchema, 'params'),
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

router.patch('/:id_rol',
    async (req, res, next) => {
        try {
            const { id_rol } = req.params;
            const body = req.body;
            const rol = await service.update(id_rol, body);
            res.json(rol);
        } catch (error) {
            next(error);
        }
    }
);

router.delete('/delete/:id_rol',
    async (req, res, next) => {
        try {
            const { id_rol } = req.params;
            await service.delete(id_rol);
            res.status(201).json({id_rol});
        } catch (error) {
            next(error);
        }
    }
);

export default router;