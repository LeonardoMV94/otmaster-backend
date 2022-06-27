import sequelize from 'sequelize';
import boom from '@hapi/boom';
const { ValidationError} = sequelize;

const logErrors = (err, req, res, next) => {
    console.log(`${err.message}`);
    next(err);
};

const errorHandler = (err, req, res, next) => {
    res.status(500).json({
        message: err.message,
        stack: err.stack,
    });
};

const boomErrorHandler = (err, req, res, next) => {
    if(err.isBoom) {
        const {output} = err;
        res.status(output.statusCode).json(output.payload);
    }
    next(err);
};

const ormErrorHandler = (err, req, res, next) =>{
    if(err instanceof ValidationError){
        res.status(409).json({
          statusCode:409,
          message:err.name,
          errors: err.errors
        });
    }
    next(err);
};


export {
    logErrors,
    errorHandler,
    boomErrorHandler,
    ormErrorHandler
};