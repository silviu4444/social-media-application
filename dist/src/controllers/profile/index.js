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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserPosts = void 0;
const user_1 = __importDefault(require("../../models/user"));
const response_messages_1 = __importDefault(require("../shared/constants/response-messages"));
const profile_responses_1 = require("./constants/profile-responses");
const getUserPosts = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userId = req.session.user._id;
    try {
        const posts = yield user_1.default.getAllPosts(userId);
        res.status(200).json({
            message: profile_responses_1.PROFILE_RESPONSE_MESSAGES.POSTS_SUCCESSFULLY_SENT,
            posts
        });
    }
    catch (_) {
        res
            .status(500)
            .json({ message: response_messages_1.default.SOMETHING_WENT_WRONG });
    }
});
exports.getUserPosts = getUserPosts;
