"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportController = void 0;
const BaseController_1 = require("@/controllers/BaseController");
const transportservice_1 = require("@/services/transportservice");
exports.transportController = new BaseController_1.BaseController(transportservice_1.transportService);
