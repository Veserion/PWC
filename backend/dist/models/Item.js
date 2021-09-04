"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const ItemSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: false },
    isFragile: { type: Boolean, required: true, default: false },
    price: { type: Number, required: true },
});
exports.Item = mongoose_1.default.model("Item", ItemSchema);
