import express from "express";
import ColaboradoresService from './../services/colaboradores.service.js';

const router = express.Router();
const service = new ColaboradoresService();

router.get('/', async(req, res,next) => {
    try {        
        const results = await service.find();
        if (results.length > 0) {
            res.json(results);
        } else {
            res.json({mensaje: "no hay colaboradores"})
        }
    } catch (error) {
        next(error)
    }     
});

export default router;