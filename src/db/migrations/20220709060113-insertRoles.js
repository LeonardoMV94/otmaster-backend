'use strict';
import { ROLES_TABLE} from '../models/roles.model.js';


module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(ROLES_TABLE, [
      {
        "nombre_rol": "admin"
      },
      {
        "nombre_rol": "admin"
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDestroy(ROLES_TABLE, null, {})
  }
};
