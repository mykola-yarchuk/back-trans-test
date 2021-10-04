"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createBaseRoute = void 0;
const express_1 = __importDefault(require("express"));
const createBaseRoute = (controller, route) => {
    const initRoute = (app) => {
        const router = express_1.default.Router();
        router.route('/')
            .get([
            controller.getAll,
        ])
            .post([
            controller.add,
        ]);
        router.route('/:id')
            .get([
            controller.getOne,
        ])
            .patch([
            controller.update,
        ])
            .delete([
            controller.delete,
        ]);
        app.use(`/${route}`, router);
    };
    initRoute.exportsName = route.slice(0, -1);
    return initRoute;
};
exports.createBaseRoute = createBaseRoute;
