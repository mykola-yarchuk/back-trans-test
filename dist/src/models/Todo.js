"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Todo = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let Todo = class Todo extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
    })
], Todo.prototype, "text", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(() => Date.now()),
    (0, sequelize_typescript_1.Column)({
        field: 'created_at',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Todo.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(() => Date.now()),
    (0, sequelize_typescript_1.Column)({
        field: 'updated_at',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Todo.prototype, "updatedAt", void 0);
Todo = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'todos',
    })
], Todo);
exports.Todo = Todo;
