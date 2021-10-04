"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTransportRoute = void 0;
const createBaseRoute_1 = require("@/helpers/createBaseRoute");
const TransportController_1 = require("@/controllers/TransportController");
exports.initTransportRoute = (0, createBaseRoute_1.createBaseRoute)(TransportController_1.transportController, 'transports');
