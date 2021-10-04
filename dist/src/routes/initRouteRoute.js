"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRouteRoute = void 0;
const createBaseRoute_1 = require("@/helpers/createBaseRoute");
const RouteController_1 = require("@/controllers/RouteController");
exports.initRouteRoute = (0, createBaseRoute_1.createBaseRoute)(RouteController_1.routeController, 'routes');
