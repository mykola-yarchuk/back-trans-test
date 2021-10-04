"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.initSequelize = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
const Transport_1 = require("@/models/Transport");
const Route_1 = require("@/models/Route");
const config = require('../../config/config')[process.env.NODE_ENV];
const models = [
    Transport_1.Transport,
    Route_1.Route,
];
const initSequelize = () => __awaiter(void 0, void 0, void 0, function* () {
    const sequelize = new sequelize_typescript_1.Sequelize(config.database, config.username, config.password, Object.assign(Object.assign({}, config), { models: Object.values(models) }));
    try {
        yield sequelize.authenticate();
    }
    catch (err) {
        console.log(err);
    }
    return sequelize;
});
exports.initSequelize = initSequelize;
