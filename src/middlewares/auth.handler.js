import boom from '@hapi/boom';

const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['api'];
    if (apiKey === '123') {
        next();
    } else {
        next(boom.unauthorized());
    }
};

const checkAdminRol = ( req, res, next ) => {
    const user = req.user;
    if (user.role == 'admin') {
        next();
    } else {
        next(boom.unauthorized());
    }
};

export { checkApiKey, checkAdminRol};