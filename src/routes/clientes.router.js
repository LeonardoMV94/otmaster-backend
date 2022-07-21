import express from "express";

import ClientesService from "./../services/clientes.service.js";
import validatorHandler from './../middlewares/validator.handler.js'
import {createClienteSchema, updateClienteSchema, getClienteByid} from "./../schemas/clientes.schema.js"
import { checkAdminRol } from "./../middlewares/auth.handler.js";


const router = express.Router();
const service = new ClientesService();

//CRUD CLIENTES
router.get('/', async(req,res,next) => {
    try {        
        const results = await service.find();
        res.json(results);        
    } catch (error) {
        next(error);
    }       
});

router.get('/:rut_cliente', 
    validatorHandler(getClienteByid, 'params'),
    async (req,res,next) => {    
    try {
        const {rut_cliente} = req.params;
        const results = await service.findById(rut_cliente);
        res.status(200).json(results);
    } catch (error) {
        next(error);
    }
    
});

router.post('/add/', validatorHandler(createClienteSchema, 'body'), async (req, res, next) => {        
    try {
        const clienteObj = {
            rut_cliente: req.body.rut_cliente,
            nombre_cliente: req.body.nombre_cliente,
            appat_cliente: req.body.appat_cliente,
            apmat_cliente: req.body.apmat_cliente,
            correo_cliente: req.body.correo_cliente,
            tel_cliente: req.body.tel_cliente
        };
        const cli = await service.create(clienteObj);
        res.status(200).json(cli);
    } catch (error) {
        next(error)
    }    
})


router.put('/update/:rut_cliente', 
    validatorHandler(getClienteByid, 'params'),
    validatorHandler(updateClienteSchema, 'body'),
    async (req, res,next) =>{
    try {
        const {rut_cliente} = req.params;
        const body = req.body
        const mensaje = await service.update(rut_cliente,body);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

router.delete('/delete/:rut_cliente',
    validatorHandler(getClienteByid, 'params'),
    checkAdminRol,
    async (req, res,next) => {
    try {
        const {rut_cliente} = req.params;
        const mensaje = await service.delete(rut_cliente);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

export default router;