import { Strategy, ExtractJwt } from 'passport-jwt';
import configEnv from '../../../config/config.js';


const options = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: configEnv.jwtSecret
};

const JwtStrategy = new Strategy( options, (payload, done) => {
    return done( null, payload )
});

export default JwtStrategy;