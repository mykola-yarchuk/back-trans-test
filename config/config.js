const dotenv = require('dotenv-safe');

dotenv.config();

const config = {
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  pool: 5,
  encoding: 'unicode',
  timeout: 5000,
  dialect: 'mysql',
  seederStorage: 'sequelize',
  logging: false,
};

module.exports = {
  development: {
    ...config,
  },
  production: {
    ...config,
  },
};
