"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initTodoRoute = void 0;
const createBaseRoute_1 = require("@/helpers/createBaseRoute");
const TodoController_1 = require("@/controllers/TodoController");
exports.initTodoRoute = (0, createBaseRoute_1.createBaseRoute)(TodoController_1.todoController, 'todos');
