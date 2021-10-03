import { Sequelize } from 'sequelize-typescript';

const config = require('../../config/config')[process.env.NODE_ENV as string];

const models = [
  null, // models goes here
];

export const initSequelize = async () => {
  const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {
      ...config,
      models: Object.values(models),
    },
  );

  try {
    await sequelize.authenticate();
  } catch (err) {
    console.log(err);
  }

  return sequelize;
};
