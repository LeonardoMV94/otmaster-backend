import express from "express";
import TipoDispositivoService from "../services/tipoDispositivo.service.js";
import validatorHandler from "../middlewares/validator.handler.js";
import {
    createTipoDispositivoSchema,
    updateTipoDispositivoSchema,
    getTipoDispositivoByid
} from '../schemas/tiposDispositivos.schema.js'

const router = express.Router();
const service = new TipoDispositivoService();

// CRUD Dispositivos
router.get('/', async(req,res,next) => {
    try {
        const results = await service.find();
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.get('/:id_tipo', 
    validatorHandler(getTipoDispositivoByid, 'params'),
    async (req,res,next) => {    
    try {
        const {id_tipo} = req.params;
        const results = await service.findById(id_tipo);
        res.status(200).json(results);
    } catch (error) {
        next(error);
    }
    
});

router.post('/add/',
    validatorHandler(createTipoDispositivoSchema, 'body'),
    async (req, res, next) => {        
    try {
        const tipoDispositivoObj = {
            nombre_tipo: req.body.nombre_tipo
        };
        const dis = await service.create(tipoDispositivoObj);
        res.status(200).json(dis);

    } catch (error) {
        next(error);
    }
});

router.put('/update/:id_tipo', 
    validatorHandler(updateTipoDispositivoSchema, 'body'),
    async (req, res,next) =>{
    try {
        const {ID_tipo} = req.params;
        const marcaDispositivoObj = {
            nombre_marca: req.body.nombre_marca
        };
        const mensaje = await service.update(ID_tipo,marcaDispositivoObj);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

router.delete('/delete/:ID_tipo', async (req, res,next) => {
    try {
        const {ID_tipo} = req.params;
        const mensaje = await service.delete(ID_tipo);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

export default router;