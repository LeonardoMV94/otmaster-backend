import { MySqlConexion} from "../libs/mysql.pool.js
//import boom from '@hapi/boom';

const con = await MySqlConexion();

class ColaboradoresService {

    constructor(){

    }

    async find(){
        const sql = 'SELECT * FROM colaboradores';
        const [results] =  await con.promise().query(sql);
        return results
    }
}

export default ColaboradoresService;