import { createBaseRoute } from '@/helpers/createBaseRoute';
import { transportController } from '@/controllers/TransportController';

export const initTransportRoute = createBaseRoute(
  transportController,
  'transports',
);
