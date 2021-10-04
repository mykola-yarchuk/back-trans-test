"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Transport = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const constants_1 = require("@/models/constants");
const Route_1 = require("@/models/Route");
let Transport = class Transport extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Unique)(true),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.STRING,
        field: 'license_plate',
    })
], Transport.prototype, "licensePlate", void 0);
__decorate([
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(constants_1.TransportModel)),
    })
], Transport.prototype, "model", void 0);
__decorate([
    sequelize_typescript_1.NotEmpty,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(constants_1.TransportType)),
    })
], Transport.prototype, "type", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(() => Date.now()),
    (0, sequelize_typescript_1.Column)({
        field: 'purchase_date',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Transport.prototype, "purchaseDate", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(0),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.INTEGER,
    })
], Transport.prototype, "mileage", void 0);
__decorate([
    (0, sequelize_typescript_1.Default)(constants_1.TransportStatus.Free),
    (0, sequelize_typescript_1.Column)({
        type: sequelize_typescript_1.DataType.ENUM(...Object.values(constants_1.TransportStatus)),
    })
], Transport.prototype, "status", void 0);
__decorate([
    (0, sequelize_typescript_1.HasMany)(() => Route_1.Route)
], Transport.prototype, "routes", void 0);
__decorate([
    sequelize_typescript_1.CreatedAt,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(() => Date.now()),
    (0, sequelize_typescript_1.Column)({
        field: 'created_at',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Transport.prototype, "createdAt", void 0);
__decorate([
    sequelize_typescript_1.UpdatedAt,
    (0, sequelize_typescript_1.AllowNull)(false),
    (0, sequelize_typescript_1.Default)(() => Date.now()),
    (0, sequelize_typescript_1.Column)({
        field: 'updated_at',
        type: sequelize_typescript_1.DataType.DATE,
    })
], Transport.prototype, "updatedAt", void 0);
Transport = __decorate([
    (0, sequelize_typescript_1.Table)({
        tableName: 'transports',
    })
], Transport);
exports.Transport = Transport;
