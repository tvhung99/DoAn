module.exports = {
  up: async (queryInterface, Sequelize) => {
    return await queryInterface.createTable('Histories', {
      /**
       * 
        id: DataTypes.STRING,
        patientId: DataTypes.STRING,
        doctorId: DataTypes.STRING,
        description: DataTypes.STRING,
        files: DataTypes.STRING,
       */
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.STRING,
      },
      patientId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      doctorId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      description: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      files: {
        allowNull: true,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
      },
      deletedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Histories');
  },
};
