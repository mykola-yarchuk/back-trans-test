"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoController = void 0;
const BaseController_1 = require("@/controllers/BaseController");
const todoService_1 = require("@/services/todoService");
exports.todoController = new BaseController_1.BaseController(todoService_1.todoService);
