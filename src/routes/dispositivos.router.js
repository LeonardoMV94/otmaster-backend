import express from "express";
import DispositivosService from "../services/dispositivos.service.js";
import validatorHandler from "../middlewares/validator.handler.js";
import {createDispositivoSchema, updateDispositivoSchema, getDispositivoByid} from "../schemas/dispositivos.schema.js";

const router = express.Router();
const service = new DispositivosService();

// CRUD Dispositivos
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
    validatorHandler(createDispositivoSchema, 'body'),
    async (req, res, next) => {        
    try {
        const dispositivoObj = {
            ID_dispositivo: req.body.ID_dispositivo,
            num_serie_dispositivo: req.body.num_serie_dispositivo,
            modelo: req.body.modelo
            // marcas_dispositivos_ID_marcas: req.body.marcas_dispositivos_ID_marcas,
            // tipos_dispositivos_ID_tipos: req.body.tipos_dispositivos_ID_tipos
        };
        const dis = await service.create(dispositivoObj);
        res.status(200).json(dis);

    } catch (error) {
        next(error);
    }
});

router.put('/update/:rut', async (req, res,next) =>{
    try {
        const {id} = req.params;
        const dispositivoObj = {
            ID_dispositivo: req.body.ID_dispositivo,
            num_serie_dispositivo: req.body.num_serie_dispositivo,
            modelo: req.body.modelo
            // marcas_dispositivos_ID_marcas: req.body.marcas_dispositivos_ID_marcas,
            // tipos_dispositivos_ID_tipos: req.body.tipos_dispositivos_ID_tipos
        };
        const mensaje = await service.update(id,dispositivoObj);
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

/*
router.get('/', async(error,req, res,next) => {
    try {        
        const results = await service.find();
        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.json({mensaje: "no hay dispositivos"})
        }
    } catch (error) {
        next(error)
    }     
})
*/