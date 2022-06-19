import boom from '@hapi/boom';

const checkApiKey = (req, res, next) => {
    const apiKey = req.headers['api']
    if (apiKey === '123') {
        next()
    } else {
        next(boom.unauthorized())
    }
}

export default checkApiKey