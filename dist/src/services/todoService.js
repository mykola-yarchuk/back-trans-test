"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.todoService = void 0;
const BaseService_1 = require("@/services/BaseService");
const Todo_1 = require("@/models/Todo");
exports.todoService = new BaseService_1.BaseService(Todo_1.Todo);
