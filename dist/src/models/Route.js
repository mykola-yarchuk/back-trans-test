"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Route = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("@/models/constants");
const Transport_1 = require("@/models/Transport");
let Route = class Route extends sequelize_typescript_1.Model {
};
__decorate([
    (0, sequelize_typescript_1.BelongsTo)(() => Transport_1.Transport)
], Route.prototype, "transport", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        field: 'start_point',
        type: sequelize_typescript_1.DataType.STRING,
    })
], Route.prototype, "startPoint", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        field: 'end_point',
        type: sequelize_typescript_1.DataType.STRING,
    })
], Route.prototype, "endPoint", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        field: 'required_transport_type',
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(constants_1.TransportType)),
    })
], Route.prototype, "requiredTransportType", void 0);
__decorate([
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], Route.prototype, "distance", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'start_date',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Route.prototype, "startDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Column)({
        field: 'end_date',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Route.prototype, "endDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(constants_1.RouteStatus.Pending),
    (0, sequelize_typescript_1.Column)({
        field: 'end_date',
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(constants_1.RouteStatus)),
    })
], Route.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.ForeignKey)(() => Transport_1.Transport),
    (0, sequelize_typescript_1.Index)('index_routes_on_transport_id'),
    (0, sequelize_typescript_1.Column)({
        field: 'transport_id',
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], Route.prototype, "transportId", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(() => Date.now()),
    (0, sequelize_typescript_1.Column)({
        field: 'created_at',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Route.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(() => Date.now()),
    (0, sequelize_typescript_1.Column)({
        field: 'updated_at',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Route.prototype, "updatedAt", void 0);
Route = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'routes',
    })
], Route);
exports.Route = Route;
