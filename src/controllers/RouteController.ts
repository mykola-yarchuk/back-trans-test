import { BaseController } from '@/controllers/BaseController';
import { routeService } from '@/services/routesService';

export const routeController = new BaseController(routeService);
