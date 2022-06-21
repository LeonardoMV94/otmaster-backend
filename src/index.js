import express from 'express';
import routerApi from './routes/index.js';
import {logErrors, errorHandler,boomErrorHandler, ormErrorHandler} from './middlewares/error.handler.js';
import {checkApiKey} from './middlewares/auth.handler.js';
import cors from 'cors';

//inicializar
const app = express();
const PORT = process.env.PORT || 8000;

//settings
app.use(express.json());

app.use(cors());

// auth strategies
import './utils/auth/index.js'

// test
app.get('/test', checkApiKey, (req, res) => {
    res.send('Hola, soy una nueva ruta de test')
})

//routers
routerApi(app);

//middlewares
app.use(logErrors);
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);


//port
app.listen(PORT, () => {
    console.clear()
    console.log('Servidor inicializado en puerto 8000');
});

// video https://www.youtube.com/watch?v=zsnHIlsUPSU
// HTTP CODES: https://www.webfx.com/web-development/glossary/http-status-codes/
