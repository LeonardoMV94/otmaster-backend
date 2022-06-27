import express from "express";
import passport from "passport";
import jwt from 'jsonwebtoken';
import configEnv from './../config/config.js';

const router = express.Router();

router.post('/login',
    passport.authenticate('local', {session: false}),
    async (req, res, next) => {
        try {
            const user = req.user;
            const payload = {
                sub: user.rut_colaborador,
                role: user.roles.nombre_rol
            };
            const token = jwt.sign(payload, configEnv.jwtSecret);
            res.json( { user, token } );
        } catch (error) {
            next(error);
        }
    }
);


export default router;