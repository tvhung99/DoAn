module.exports =  {
  up: async (queryInterface , Sequelize) => {
    return await queryInterface.createTable('Positions', ({
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING
      },
      positionId : {
        allowNull : false,
        type : Sequelize.STRING,
      },
      position : {
        allowNull : false,
        type : Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      deletedAt :{
        allowNull: true,
        type: Sequelize.DATE
      }
    }));
  },
  down: async (queryInterface , Sequelize) => {
   await queryInterface.dropTable('Positions');
  }
};