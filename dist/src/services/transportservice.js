"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transportService = void 0;
const BaseService_1 = require("@/services/BaseService");
const Transport_1 = require("@/models/Transport");
exports.transportService = new BaseService_1.BaseService(Transport_1.Transport);
