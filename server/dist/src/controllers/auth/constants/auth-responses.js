"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_messages_1 = __importDefault(require("../../shared/constants/response-messages"));
const AUTH_RESPONSE_MESSAGES = Object.assign(Object.assign({}, response_messages_1.default), { USER_CREATED: 'User created!', USER_ALREADY_EXISTS: 'This user already exists!' });
exports.default = AUTH_RESPONSE_MESSAGES;
