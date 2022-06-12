import express from "express";
import ClientesService from "./../services/clientes.service.js";
import validatorHandler from './../middlewares/validator.handler.js'
import {createClienteSchema, updateClienteSchema, getClienteByid} from "./../schemas/clientes.schema.js"

const router = express.Router();
const service = new ClientesService();

//CRUD CLIENTES
router.get('/', async(req,res,next) => {
    try {        
        const results = await service.find();
        res.json(results);        
    } catch (error) {
        next(error)
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
        next(error)
    }
    
});

router.post('/add/',
    validatorHandler(createClienteSchema, 'body'),
    async (req, res, next) => {        
    try {
        const clienteObj = {
            rut_cliente: req.body.rut_cliente,
            nombre_cliente: req.body.nombre_cliente,
            appat_cliente: req.body.appat_cliente,
            apmat_cliente: req.body.apmat_cliente,
            correo_cliente: req.body.correo_cliente,
            tel_cliente: req.body.tel_cliente
        }
        const cli = await service.create(clienteObj);
        res.status(200).json(cli);

    } catch (error) {
        next(error)
    }
    
})

router.put('/update/:rut', async (req, res,next) =>{
    try {
        const {rut} = req.params;
        const clienteObj = {
            nombre_cliente: req.body.nombre_cliente,
            appat_cliente: req.body.appat_cliente,
            apmat_cliente: req.body.apmat_cliente,
            correo_cliente: req.body.correo_cliente,
            tel_cliente: req.body.tel_cliente
        }
        const mensaje = await service.update(rut,clienteObj);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error)
    }


});

router.delete('/delete/:id', async (req, res,next) => {
    try {
        const {id} = req.params;
        const mensaje = await service.delete(id);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error)
    }
});

export default router;