'use strict';

import { COLABORADORES_TABLE} from '../models/colaborador.model.js';

module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(COLABORADORES_TABLE, [{
      "rut_colaborador": 18222334,
      "password_colaborador": "$2a$10$Hs8FRDm1tDePr69yeHqJx.NhlCZSAm0ulR9kgpVCrXQ1RGxX6XRt6",
      "nombre_colaborador": "Lucas",
      "apmat_colaborador": "flañiga",
      "appat_colaborador": "Goñi",
      "rolesIdRol": 1
    }])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDestroy(COLABORADORES_TABLE, null, {})
  }
};
