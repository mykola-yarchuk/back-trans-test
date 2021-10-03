import { Sequelize } from 'sequelize-typescript';
import { Transport } from '@/models/Transport';
import { Route } from '@/models/Route';

const config = require('../../config/config')[process.env.NODE_ENV as string];

const models = [
  Transport,
  Route,
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
