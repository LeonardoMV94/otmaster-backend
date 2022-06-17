import express from "express";
import ColaboradoresService from './../services/colaboradores.service.js';
import validatorHandler from './../middlewares/validator.handler.js';
import {createColaboradorSchema, updateColaboradorSchema, getColaboradorByid} from "./../schemas/colaboradores.schema.js";

const router = express.Router();
const service = new ColaboradoresService();

// CRUD Colaboradores
router.get('/', async(req,res,next) => {
    try {        
        const results = await service.find();
        res.json(results);        
    } catch (error) {
        next(error);
    }       
});

router.get('/:id', async (req,res,next) => {    
    try {
        const {id} = req.params;
        const results = await service.findById(id);
        res.status(200).json(results);
        // if (results.length > 0) {
        // } else {
        //     res.status(404).json({mensaje: "no existe el cliente"})
        // }
    } catch (error) {
        next(error);
    }
    
});

router.post('/add/',
    validatorHandler(createColaboradorSchema, 'body'),
    async (req, res, next) => {        
    try {
        const colaboradorObj = {
            rut_colaborador: req.body.rut_colaborador,
            nombre_colaborador: req.body.nombre_colaborador,
            appat_colaborador: req.body.appat_colaborador,
            apmat_colaborador: req.body.apmat_colaborador,
            password_colaborador: req.body.password_colaborador,
            // roles_ID_rol: req.body.roles_ID_rol,
            // direcciones_ID_direcion: req.body.direcciones_ID_direcion,
        };
        const col = await service.create(colaboradorObj);
        res.status(200).json(col);

    } catch (error) {
        next(error);
    }
});

router.put('/update/:rut', async (req, res,next) =>{
    try {
        const {rut} = req.params;
        const colaboradorObj = {
            rut_colaborador: req.body.rut_colaborador,
            nombre_colaborador: req.body.nombre_colaborador,
            appat_colaborador: req.body.appat_colaborador,
            apmat_colaborador: req.body.apmat_colaborador,
            password_colaborador: req.body.password_colaborador
            // roles_ID_rol: req.body.roles_ID_rol,
            // direcciones_ID_direcion: req.body.direcciones_ID_direcion,
        };
        const mensaje = await service.update(rut,colaboradorObj);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

router.delete('/delete/:id', async (req, res,next) => {
    try {
        const {id} = req.params;
        const mensaje = await service.delete(id);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

export default router;