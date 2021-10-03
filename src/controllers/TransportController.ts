import { BaseController } from '@/controllers/BaseController';
import { transportService } from '@/services/transportservice';

export const transportController = new BaseController(transportService);
