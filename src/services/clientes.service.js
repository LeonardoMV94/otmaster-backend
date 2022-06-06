import { MySqlConexion} from "../libs/mysql.pool.js";
//import boom from '@hapi/boom';

const con = await MySqlConexion();

class ClientesService {

    constructor() {
        
    };

    /**
     * Esta funcion registra un cliente en la base de datos, verificando anteriormente si existe previamente
     * @param {Object} clienteObj El objeto JSON entregado por request en clientes.router
     * @returns Object Retorna feedback de creacion de cliente
     */
    async create(clienteObj) {
        // Insert into a MySQL table or update if exists
        // INSERT INTO table (id, name, age) VALUES(1, "A", 19) ON DUPLICATE KEY UPDATE name="A", age=19
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

    /**
     * Esta funcion retorna todos los clientes
     * @returns Object Retorna todas las rows de la tabla CLIENTES
     */
    async find() {        
        const sql = 'SELECT * FROM clientes';
        const [data] = await con.promise().query(sql);
        return data;
    };

    /**
     * Esta funcion busca un cliente por rut_cliente (PrimaryKey) en la tabla CLIENTES
     * @param {Number} id Es el primary key de cliente
     * @returns Object retorna el row encontrado en bd
     */
    async findOne(id) {
        const sql = `SELECT * FROM clientes where rut_cliente = ${id}`;
        const [data] = await con.promise().query(sql);
        if (data.length == 0) {
            return {mensaje: "no existe el cliente"}
        } else{
            return data
        }
    };

    /**
     * Esta funcion actualiza los datos del cliente por rut_cliente (PrimaryKey) en la tabla CLIENTES
     * @param {Number} rut El identificador de cliente
     * @param {Object} clienteObj Los datos a actualizar del cliente
     * @returns Object Mensaje con feedback
     */
    async update(rut, clienteObj) {
        const sql = `UPDATE clientes SET ? WHERE rut_cliente = ${rut}`;
        const [data] = await con.promise().query(sql,clienteObj);
        if (data.affectedRows == 0) {
            return {mensaje: "id de cliente no encontrado"}
        } else{
            return {mensaje: "cliente modificado!"}
        }       
    };

    /**
     * Esta funcion elimina un cliente por rut_cliente (PrimaryKey) en la tabla CLIENTES
     * @param {Number} id Es el rut_cliente identificador
     * @returns Objeto Mensaje feedback
     */
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