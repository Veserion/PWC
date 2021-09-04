"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.mongoUrl = void 0;
const path_1 = __importDefault(require("path"));
const dotenv_1 = require("dotenv");
const utils_1 = require("./utils");
dotenv_1.config({ path: path_1.default.join(__dirname, "../.env") });
exports.mongoUrl = utils_1.loadVar("MONGO_URL");
exports.port = utils_1.loadVar("PORT", true);
