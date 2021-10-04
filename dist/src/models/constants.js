"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteStatus = exports.TransportStatus = exports.TransportType = exports.TransportModel = void 0;
var TransportModel;
(function (TransportModel) {
    TransportModel["Bmw"] = "BMW";
    TransportModel["Mercedes"] = "MERCEDES";
    TransportModel["Audi"] = "AUDI";
    TransportModel["Volvo"] = "VOLVO";
})(TransportModel = exports.TransportModel || (exports.TransportModel = {}));
var TransportType;
(function (TransportType) {
    TransportType["Cargo"] = "CARGO";
    TransportType["Light"] = "LIGHT";
    TransportType["Bus"] = "BUS";
})(TransportType = exports.TransportType || (exports.TransportType = {}));
var TransportStatus;
(function (TransportStatus) {
    TransportStatus["Free"] = "FREE";
    TransportStatus["Bust"] = "BUSY";
})(TransportStatus = exports.TransportStatus || (exports.TransportStatus = {}));
var RouteStatus;
(function (RouteStatus) {
    RouteStatus["Pending"] = "PENDING";
    RouteStatus["InProgress"] = "IN_PROGRESS";
    RouteStatus["Done"] = "DONE";
})(RouteStatus = exports.RouteStatus || (exports.RouteStatus = {}));
