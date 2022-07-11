
module.exports = {
  up: ( queryInterface ) => {
    return queryInterface.bulkInsert( 'roles', [
      {
        "nombre_rol": "admin",
        "created_at": new Date(),
        'updated_at': new Date()
      },
      {
        "nombre_rol": "user",
        "created_at": new Date(),
        'updated_at': new Date()
      }
    ])
  },

  down: (queryInterface) => {
    return queryInterface.bulkDestroy( 'roles' , null, {})
  }
};
