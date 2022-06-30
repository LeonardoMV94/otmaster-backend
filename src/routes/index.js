import express from 'express';
import passport from 'passport';

import clientesRouter from './clientes.router.js';
import colaboradoresRouter from './colaboradores.router.js';
import dispositivosRouter from './dispositivos.router.js';
import ticketsRouter from './tickets.router.js';
import rolesRouter from './roles.router.js';
import authRouter from './auth.router.js';

import { checkAdminRol } from './../middlewares/auth.handler.js';

const routerApi = (app) => {
    const router = express.Router();
    //route base
    app.use('/api/v1', router);
    
    //endpoints
    router.use( '/auth', authRouter );
    router.use( '/clientes', passport.authenticate('jwt', { session: false } ), clientesRouter );
    router.use( '/roles',  passport.authenticate('jwt', { session: false } ), checkAdminRol, rolesRouter );
    // router.use( '/colaboradores', passport.authenticate('jwt', { session: false } ), checkAdminRol, colaboradoresRouter );
    router.use( '/colaboradores',  colaboradoresRouter );
    router.use( '/dispositivos', passport.authenticate('jwt', { session: false } ), dispositivosRouter );
    router.use( '/tickets', passport.authenticate('jwt', { session: false } ), ticketsRouter );
}

export default routerApi;