import express from "express";
// es probable que no valla la extencion '.js' al final del archivo 'tickets.services.js'
import TicketsService from "../services/tickets.service.js";
import validatorHandler from "../middlewares/validator.handler.js";
import {createTicketSchema, updateTicketSchema, getTicketByid} from "../schemas/tickets.schema.js";

const router = express.Router();
const service = new TicketsService();

// CRUD Tickets
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
    validatorHandler(createTicketSchema, 'body'),
    async (req, res, next) => {        
    try {
        const ticketObj = {
            ID_ticket: req.body.ID_ticket,
            diagnostico_ticket: req.body.diagnostico_ticket,
            resolucion_ticket: req.body.resolucion_ticket
            // estado_tickets_ID_estado: req.body.estado_tickets_ID_estado,
            // dispositivos_ID_dispositivo: req.body.dispositivos_ID_dispositivo,
            // clientes_ID_cliente: req.body.clientes_ID_cliente,
            // colaboradores_ID_colaborador: req.body.colaboradores_ID_colaborador,
            // repuestos_ID_repuesto: req.body.repuestos_ID_repuesto
        };
        const tic = await service.create(ticketObj);
        res.status(200).json(tic);

    } catch (error) {
        next(error);
    }
});

router.put('/update/:rut', async (req, res,next) =>{
    try {
        const {id} = req.params;
        const ticketObj = {
            ID_ticket: req.body.ID_ticket,
            diagnostico_ticket: req.body.diagnostico_ticket,
            resolucion_ticket: req.body.resolucion_ticket
            // estado_tickets_ID_estado: req.body.estado_tickets_ID_estado,
            // dispositivos_ID_dispositivo: req.body.dispositivos_ID_dispositivo,
            // clientes_ID_cliente: req.body.clientes_ID_cliente,
            // colaboradores_ID_colaborador: req.body.colaboradores_ID_colaborador,
            // repuestos_ID_repuesto: req.body.repuestos_ID_repuesto
        };
        const mensaje = await service.update(id,ticketObj);
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