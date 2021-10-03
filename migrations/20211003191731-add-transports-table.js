module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      'transports',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        licensePlate: {
          field: 'license_plate',
          type: Sequelize.STRING,
          allowNull: false,
          unique: true,
        },
        model: {
          type: Sequelize.ENUM('BMW', 'MERCEDES', 'AUDI', 'VOLVO'),
          allowNull: false,
          validate: {
            isIn: [['BMW', 'MERCEDES', 'AUDI', 'VOLVO']],
          },
        },
        type: {
          type: Sequelize.ENUM('CARGO', 'LIGHT', 'BUS'),
          allowNull: false,
          validate: {
            isIn: [['CARGO', 'LIGHT', 'BUS']],
          },
        },
        purchaseDate: {
          field: 'purchase_date',
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
        },
        mileage: {
          type: Sequelize.INTEGER,
          defaultValue: 0,
        },
        status: {
          type: Sequelize.ENUM('FREE', 'BUSY'),
          defaultValue: 'FREE',
          validate: {
            isIn: [['FREE', 'BUSY']],
          },
        },
        createdAt: {
          field: 'created_at',
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false,
        },
        updatedAt: {
          field: 'updated_at',
          type: Sequelize.DATE,
          defaultValue: Sequelize.fn('now'),
          allowNull: false,
        },
      },
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable('transports');
  },
};
