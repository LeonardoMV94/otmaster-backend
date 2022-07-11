
module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert('colaboradores', [
      {
        "rut_colaborador": 10111222,
        "password_colaborador": "$2a$10$Hs8FRDm1tDePr69yeHqJx.NhlCZSAm0ulR9kgpVCrXQ1RGxX6XRt6",
        "nombre_colaborador": "Super",
        "apmat_colaborador": "System",
        "appat_colaborador": "Admin",
        "created_at": new Date(),
        'updated_at': new Date(),
        "roles_id_rol": 1
    }
  ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDestroy('colaboradores', null, {})
  }
};
