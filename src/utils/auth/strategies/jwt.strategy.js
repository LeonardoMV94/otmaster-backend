import passport from 'passport-local'
import boom from '@hapi/boom';
import bcrypt from 'bcrypt'

import ColaboradoresService from "../../../services/colaboradores.service.js"

const {Strategy} = passport
const service = new ColaboradoresService()

const LocalStrategy = new Strategy({usernameField:"rut_colaborador", passwordField:"password_colaborador"}, async(rutColaborador, passwordColaborador, done) => {
    try {
        const colaborador = await service.findForAuth(rutColaborador);
        if(!colaborador){
            done(boom.unauthorized(), false)
        }
        const isMatch = await bcrypt.compare(passwordColaborador, colaborador.password_colaborador)
        if(!isMatch) {
            done(boom.unauthorized(), false)
        }
        //console.log('autorizado!: ', colaborador.dataValues.rut_colaborador)
        delete colaborador.dataValues.password_colaborador
        done(null, colaborador)

    } catch (error) {
        done(error, false)
    }
})

export default LocalStrategy