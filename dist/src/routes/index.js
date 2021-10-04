"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
const initTransportRoute_1 = require("@/routes/initTransportRoute");
const initRouteRoute_1 = require("@/routes/initRouteRoute");
const routes = [
    initTransportRoute_1.initTransportRoute,
    initRouteRoute_1.initRouteRoute,
];
const initRoutes = (app) => {
    routes.forEach((initRoute) => initRoute(app));
};
exports.initRoutes = initRoutes;
