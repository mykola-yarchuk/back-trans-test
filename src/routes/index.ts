import { Application } from 'express';
import { initTransportRoute } from '@/routes/initTransportRoute';
import { initRouteRoute } from '@/routes/initRouteRoute';

const routes = [
  initTransportRoute,
  initRouteRoute,
];

export const initRoutes = (app: Application) => {
  routes.forEach((initRoute) => initRoute(app));
};
