import express from "express";
import MarcaDispositivoService from "../services/MarcaDispositivo.service.js";
import validatorHandler from "../middlewares/validator.handler.js";
import { createMarcaDispositivoSchema,
    updateMarcaDispositivoSchema,
    getMarcaDispositivoByid} from '../schemas/marcaDispositivos.schema.js'

const router = express.Router();
const service = new MarcaDispositivoService();

// CRUD Dispositivos
router.get('/', async(req,res,next) => {
    try {
        const results = await service.find();
        res.json(results);
    } catch (error) {
        next(error);
    }
});

router.get('/:ID_marca', 
    validatorHandler(getMarcaDispositivoByid, 'params'),
    async (req,res,next) => {    
    try {
        const {ID_marca} = req.params;
        const results = await service.findById(ID_marca);
        res.status(200).json(results);
    } catch (error) {
        next(error);
    }
    
});

router.post('/add/',
    validatorHandler(createMarcaDispositivoSchema, 'body'),
    async (req, res, next) => {        
    try {
        const marcaDispositivoObj = {
            nombre_marca: req.body.nombre_marca
        };
        const dis = await service.create(marcaDispositivoObj);
        res.status(200).json(dis);

    } catch (error) {
        next(error);
    }
});

router.put('/update/:ID_marca', 
    validatorHandler(updateMarcaDispositivoSchema, 'body'),
    async (req, res,next) =>{
    try {
        const {ID_marca} = req.params;
        const marcaDispositivoObj = {
            nombre_marca: req.body.nombre_marca
        };
        const mensaje = await service.update(ID_marca,marcaDispositivoObj);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

router.delete('/delete/:ID_marca', async (req, res,next) => {
    try {
        const {ID_marca} = req.params;
        const mensaje = await service.delete(ID_marca);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

export default router;