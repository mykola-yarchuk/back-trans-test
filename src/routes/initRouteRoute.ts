import { createBaseRoute } from '@/helpers/createBaseRoute';
import { routeController } from '@/controllers/RouteController';

export const initRouteRoute = createBaseRoute(
  routeController,
  'routes',
);
