"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeController = void 0;
const BaseController_1 = require("@/controllers/BaseController");
const routesService_1 = require("@/services/routesService");
exports.routeController = new BaseController_1.BaseController(routesService_1.routeService);
