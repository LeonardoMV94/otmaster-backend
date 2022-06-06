import express from "express";
import DispositivosService from "../services/dispositivos.service.js";

const router = express.Router();
const service = new DispositivosService();

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

export default router;