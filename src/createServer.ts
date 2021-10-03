import express from 'express';
import cors from 'cors';

import { initSequelize } from '@/models';
import { initRoutes } from '@/routes';

export const createServer = async () => {
  const app = express();

  app.use(cors({ origin: '*' }));
  app.use(express.json({ type: '*/*' }));

  await initSequelize();
  initRoutes(app);

  return { app };
};
