"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const response_messages_1 = __importDefault(require("../../shared/constants/response-messages"));
const POST_RESPONSE_MESSAGES = Object.assign(Object.assign({}, response_messages_1.default), { POST_CREATED: 'Post created!' });
exports.default = POST_RESPONSE_MESSAGES;
