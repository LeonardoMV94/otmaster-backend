import express from "express";
import TicketsService from "../services/tickets.service.js";
import validatorHandler from "../middlewares/validator.handler.js";
import {createTicketSchema,addItemSchema, updateTicketSchema, getTicketByid} from "../schemas/tickets.schema.js";

const router = express.Router();
const service = new TicketsService();


router.get('/estados/', async(req, res, next) => {
    try {
        const results = await service.countEstados()
        res.status(200).json(results)
    } catch (error) {
        next(error)
    }
})

// CRUD Tickets
router.get('/', async(req,res,next) => {
    try {
        const results = await service.find();
        res.json(results);
    } catch (error) {
        next(error);
    }
});


router.get('/countrepuestos/', async (req, res, next) => {
    try {
        const results = await service.countListRepuestos()
        res.status(200).json(results)
    } catch (error) {
        next(error);
    }
})

router.get('/:id_ticket', 
    validatorHandler(getTicketByid, 'params'),
    async (req,res,next) => {    
    try {
        const {id_ticket} = req.params;
        const results = await service.findById(id_ticket);
        res.status(200).json(results);
    } catch (error) {
        next(error);
    }    
});


router.post('/add-item/',
    validatorHandler(addItemSchema, 'body'),
    async (req, res, next) => {        
    try {
        const body = req.body
        const tic = await service.addItem(body);
        res.status(201).json(tic);

    } catch (error) {
        next(error);
    }
});

router.post('/add-multiple-items/:id_ticket',
    async (req, res, next) => {        
    try {
        const {id_ticket} = req.params
        const body = req.body
        const tic = await service.addMultipleItems(id_ticket,body);
        res.status(201).json(tic);

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


router.delete('/delete/:id_ticket',
    validatorHandler(getTicketByid, 'params'),
    async (req, res,next) => {
    try {
        const {id_ticket} = req.params;
        const mensaje = await service.delete(id_ticket);
        res.status(200).json(mensaje);
    } catch (error) {
        next(error);
    }
});

export default router;