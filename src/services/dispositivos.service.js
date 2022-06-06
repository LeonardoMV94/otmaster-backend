import { MySqlConexion} from "./../libs/mysql.pool.js";
import boom from '@hapi/boom';

const con = await MySqlConexion();

class DispositivosService {

    constructor(){

    }

    async find(){
        const sql = 'SELECT * FROM dispositivos';
        const results =  await con.promise().query(sql);
        return results[0]
    }
}

export default DispositivosService;