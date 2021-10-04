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
exports.BaseService = void 0;
class BaseService {
    constructor(model) {
        this.getAll = (options) => this.model.findAll({
            where: Object.assign({}, options),
        });
        this.getOne = (id) => this.model.findByPk(id);
        this.add = (data) => this.model.create(Object.assign({}, data));
        this.update = (id, data) => __awaiter(this, void 0, void 0, function* () {
            const template = Object.assign({}, data);
            const instance = yield this.model.findByPk(id);
            if (!instance) {
                return null;
            }
            yield instance.update(template);
            return instance;
        });
        this.delete = (id) => __awaiter(this, void 0, void 0, function* () {
            const instance = yield this.model.findByPk(id);
            if (!instance) {
                return null;
            }
            yield instance.destroy();
            return instance;
        });
        this.model = model;
    }
}
exports.BaseService = BaseService;
