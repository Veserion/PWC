"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const app_1 = require("./app");
const config_1 = require("./config");
// Connect to MongoDB
// mongoose.Promise = bluebird;
mongoose_1.default
    .connect(config_1.mongoUrl, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
})
    .then(() => {
    console.log("✅  Connected to MongoDB");
    /** ready to use. The `mongoose.connect()` promise resolves to undefined. */
})
    .catch((err) => {
    console.log(`❌  MongoDB connection error. Please make sure MongoDB is running. ${err}`);
    // process.exit();
});
app_1.app.listen(config_1.port !== null && config_1.port !== void 0 ? config_1.port : 5000, () => {
    console.log("🚀 Server ready at: http://localhost:" + config_1.port);
});
