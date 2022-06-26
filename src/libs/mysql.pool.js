import mysql from 'mysql2';
import dotenv from 'dotenv';
import path from 'path';
import {fileURLToPath} from 'url';

//dotenv
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({
    path: __dirname + './../../.env'
});

/**
 * Esta funcion es la configuracion de la pool de mysql y usa variables de entorno del archivo .env
 * En caso de no existir la base de datos otmaster, use workbench y ejecute archivo createDatabase.sql
 * @returns Mysql.Pool
 */
const MySqlConexion = async () => {
    // si da error intente ejecutando esto en su base de datos revise consultas.sql
    const pool = await mysql.createPool({
        host: process.env.BD_HOST,
        database: process.env.BD_NAME,
        user: process.env.BD_USER,
        password: process.env.BD_PASSWORD,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0
    });

    //verifica conexion con base de datos
    // pool.getConnection(error => {
    //     if (error) return console.log(`Error al conectar con BD OtMaster [${error.message}][${error.errno}]`)
    //     console.log('Base de datos Mysql conectada')
    // });

    return pool;
}

export {MySqlConexion};