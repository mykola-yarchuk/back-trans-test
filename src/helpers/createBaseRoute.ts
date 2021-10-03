import express, { Application } from 'express';
import { BaseController } from '@/controllers/BaseController';

export const createBaseRoute = (
  controller: BaseController,
  route: string,
) => {
  const initRoute = (app: Application) => {
    const router = express.Router();

    router.route('/')
      .get([
        controller.getAll,
      ])
      .post([
        controller.add,
      ]);

    router.route('/:id')
      .get([
        controller.getOne,
      ])
      .patch([
        controller.update,
      ])
      .delete([
        controller.delete,
      ]);

    app.use(`/${route}`, router);
  };

  initRoute.exportsName = route.slice(0, -1);

  return initRoute;
};
