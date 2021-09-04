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
exports.deleteItem = exports.updateItem = exports.createItem = exports.getItemById = exports.getAllItems = void 0;
const Item_1 = require("../models/Item");
exports.getAllItems = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    throw new Error("Not implemented");
    // const items = await Item.find({}).exec();
    // res.send(items);
});
exports.getItemById = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield Item_1.Item.findById(req.params.id);
    res.send(item);
});
exports.createItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield Item_1.Item.create(req.body);
    res.send(item);
});
exports.updateItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const item = yield Item_1.Item.findByIdAndUpdate(req.params.id, req.body);
    res.send(item);
});
exports.deleteItem = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    yield Item_1.Item.findByIdAndDelete(req.params.id);
    res.send("OK");
});
