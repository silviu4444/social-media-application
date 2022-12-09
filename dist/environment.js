"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const environment = {
    PORT: process.env.DEV_PORT,
    MONGODB_URI: process.env.MONGODB_URI_DEV,
    SESSION_SECRET: 'bahsdg1t71bhdabd112hbs13123'
};
if (process.env.STATUS === 'production') {
    environment.PORT = process.env.PROD_PORT;
    environment.MONGODB_URI = process.env.MONGODB_URI_PROD;
}
exports.default = environment;
