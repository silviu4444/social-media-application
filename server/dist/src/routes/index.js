"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const session_1 = __importDefault(require("./session/session"));
const auth_1 = require("./auth/auth");
const home_1 = require("./home/home");
const post_1 = require("./post/post");
exports.routes = (0, express_1.Router)();
// THIS ONE BELOW HAS TO BE FIRST!
exports.routes.use(session_1.default);
exports.routes.use(auth_1.authRouter);
exports.routes.use(home_1.homeRouter);
exports.routes.use(post_1.postRouter);
