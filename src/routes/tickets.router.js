import express from "express";
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

router.get('/:id_ticket', 
    validatorHandler(getTicketByid, 'params'),
    async (req,res,next) => {    
    try {
        const {id_ticket} = req.params;
        const results = await service.findById(id_ticket);
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
            problema_ticket: req.body.problema_ticket,
            estado_ticket: req.body.estado_ticket,
            dispositivosIdDispositivo: req.body.dispositivosIdDispositivo,
            clientesRutCliente: req.body.clientesRutCliente,
            colaboradoresRutColaborador: req.body.colaboradoresRutColaborador
        };
        const tic = await service.create(ticketObj);
        res.status(200).json(tic);

    } catch (error) {
        next(error);
    }
});

// router.put('/update/:id_ticket', 
//     validatorHandler(updateTicketSchema, 'body'),
//     async (req, res,next) =>{
//     try {
//         const {id} = req.params;
//         const ticketObj = {
//             id_ticket: req.body.id_ticket,
//             diagnostico_ticket: req.body.diagnostico_ticket,
//             resolucion_ticket: req.body.resolucion_ticket
//             estado_tickets_ID_estado: req.body.estado_tickets_ID_estado,
//             dispositivos_ID_dispositivo: req.body.dispositivos_ID_dispositivo,
//             clientes_ID_cliente: req.body.clientes_ID_cliente,
//             colaboradores_ID_colaborador: req.body.colaboradores_ID_colaborador,
//             repuestos_ID_repuesto: req.body.repuestos_ID_repuesto
//         };
//         const mensaje = await service.update(id,ticketObj);
//         res.status(200).json(mensaje);
//     } catch (error) {
//         next(error);
//     }
// });
router.patch('/update/:id_ticket',
    validatorHandler(getTicketByid, 'params'),
    validatorHandler(updateTicketSchema, 'body'),
    async (req, res, next) => {
        try {
            const { id_ticket } = req.params;
            const body = req.body;
            const ticket = await service.update(id_ticket, body);
            res.json(ticket);
        } catch (error) {
            next(error);
        }
    }
);


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