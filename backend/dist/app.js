"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const compression_1 = __importDefault(require("compression"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const errorhandler_1 = __importDefault(require("errorhandler"));
const express_1 = __importDefault(require("express"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = require("./routes");
exports.app = express_1.default();
exports.app.use(compression_1.default());
exports.app.use(cookie_parser_1.default());
exports.app.use(body_parser_1.default.json({ limit: "50mb" }));
exports.app.use(body_parser_1.default.urlencoded({ limit: "50mb", extended: true }));
exports.app.use(cors_1.default());
exports.app.use("/api/v1/", routes_1.router);
if (process.env.NODE_ENV === "development") {
    exports.app.use(errorhandler_1.default());
}
