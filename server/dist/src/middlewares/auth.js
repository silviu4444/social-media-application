"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAuth = void 0;
const response_messages_1 = __importDefault(require("../controllers/shared/constants/response-messages"));
const isAuth = (req, res, next) => {
    if (!req.session.user) {
        const message = {
            message: response_messages_1.default.UNAUTHENTICATED,
        };
        return res.status(403).json(message);
    }
    next();
};
exports.isAuth = isAuth;
