const tableName = 'routes';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable(
      tableName,
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          primaryKey: true,
          autoIncrement: true,
        },
        startPoint: {
          field: 'start_point',
          type: Sequelize.STRING,
          allowNull: false,
        },
        endPoint: {
          field: 'end_point',
          type: Sequelize.STRING,
          allowNull: false,
        },
        distance: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        startDate: {
          field: 'start_date',
          type: Sequelize.DATE,
        },
        requiredTransportType: {
          field: 'required_transport_type',
          type: Sequelize.ENUM('CARGO', 'LIGHT', 'BUS'),
          validate: {
            isIn: [['CARGO', 'LIGHT', 'BUS']],
          },
        },
        transportId: {
          field: 'transport_id',
          type: Sequelize.INTEGER,
        },
        status: {
          type: Sequelize.ENUM('PENDING', 'IN_PROGRESS', 'DONE'),
          defaultValue: 'PENDING',
          validate: {
            isIn: [['PENDING', 'IN_PROGRESS', 'DONE']],
          },
        },
        endDate: {
          field: 'end_date',
          type: Sequelize.DATE,
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

    await queryInterface.addConstraint(
      tableName,
      {
        type: 'foreign key',
        name: 'transports',
        references: {
          table: 'transports',
          field: 'id',
        },
        onUpdate: 'CASCADE',
        fields: ['transport_id'],
      },
    );

    await queryInterface.addIndex(
      tableName,
      ['transport_id'],
    );
  },

  down: async (queryInterface) => {
    await queryInterface.dropTable(tableName);
  },
};
