import { MySqlConexion} from "../libs/mysql.pool.js";
//import boom from '@hapi/boom';

const con = await MySqlConexion();

class ClientesService {

    constructor() {
        
    };

    async create(clienteObj) {
        const sqlExist = `SELECT EXISTS( SELECT 1 FROM clientes WHERE rut_cliente = ${clienteObj.rut_cliente})`
        const [[rowExist]] = await con.promise().query(sqlExist)
        if (Object.values(rowExist)[0] === 1) {
            return {mensaje: "cliente ya existe!"}
        } else {
            const sql = `INSERT INTO clientes SET ?`;
            const [data,fields] =  await con.promise().query(sql, clienteObj);  
            console.log(`fields: ${fields}`)
            if (data.affectedRows == 0) {
                return {mensaje: "no se pudo crear el cliente"}
            } else{
                return {mensaje: "cliente creado!", id_insertado: data.insertId}
            }
        }
    };

    async find() {        
        const sql = 'SELECT * FROM clientes';
        const [data] = await con.promise().query(sql);
        return data;
    };

    async findOne(id) {
        const sql = `SELECT * FROM clientes where rut_cliente = ${id}`;
        const [data] = await con.promise().query(sql);
        if (data.length == 0) {
            return {mensaje: "no existe el cliente"}
        } else{
            return data
        }
    };

    async update(rut, clienteObj) {
        const sql = `UPDATE clientes SET ? WHERE rut_cliente = ${rut}`;
        const [data] = await con.promise().query(sql,clienteObj);
        if (data.affectedRows == 0) {
            return {mensaje: "id de cliente no encontrado"}
        } else{
            return {mensaje: "cliente modificado!"}
        }       
    };

    async delete(id) {        
        const sql = `DELETE FROM clientes WHERE rut_cliente = ${id}`;
        const [data] = await con.promise().query(sql);
        if (data.affectedRows == 0) {
            return {mensaje: "no existe id de cliente"}
        } else{
            return {mensaje: "cliente eliminado!"}
        }      
    };
}

export default ClientesService;