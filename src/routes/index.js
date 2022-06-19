import express from 'express';
import clientesRouter from './clientes.router.js';
import colaboradoresRouter from './colaboradores.router.js';
import dispositivosRouter from './dispositivos.router.js';
import ticketsRouter from './tickets.router.js';
import rolesRouter from './roles.router.js'
import authRouter from './auth.router.js'

const routerApi = (app) => {
    const router = express.Router();
    //route base
    app.use('/api/v1', router)
    
    //endpoints
    router.use('/auth', authRouter)
    router.use('/clientes', clientesRouter)
    router.use('/roles', rolesRouter)
    router.use('/colaboradores', colaboradoresRouter)
    router.use('/dispositivos', dispositivosRouter)
    router.use('/tickets', ticketsRouter)
}

export default routerApi;