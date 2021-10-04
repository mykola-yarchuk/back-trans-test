"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routeService = void 0;
const BaseService_1 = require("@/services/BaseService");
const Route_1 = require("@/models/Route");
exports.routeService = new BaseService_1.BaseService(Route_1.Route);
