import express from 'express';
import routerApi from './routes/index.js';
import {logErrors, errorHandler,boomErrorHandler, ormErrorHandler} from './middlewares/error.handler.js';
import {checkApiKey} from './middlewares/auth.handler.js';
import cors from 'cors';

import path from 'path';
import {fileURLToPath} from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//inicializar
const app = express();
const PORT = process.env.PORT || 8000;

//settings
app.use(express.json());
app.use(cors());
app.use(express.static(__dirname + './../dist'));

// auth strategies
import './utils/auth/index.js'

// test
app.get('/test', checkApiKey, (req, res) => {
    res.send('Hola, soy una nueva ruta de test')
})

// quasar dist
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'))
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
