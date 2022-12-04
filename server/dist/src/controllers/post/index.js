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
exports.postAddNewPost = void 0;
const helpers_1 = require("../home/helpers/helpers");
const post_responses_1 = __importDefault(require("./constants/post.responses"));
const postAddNewPost = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { description, base64Img } = req.body;
    const User = req.session.user;
    const successMessage = {
        message: post_responses_1.default.POST_CREATED
    };
    if (base64Img) {
        try {
            yield (0, helpers_1.storeImageAndAddNewPost)(base64Img, description, User);
            res.status(200).json(successMessage);
        }
        catch ({ message }) {
            return res.status(500).json({ message });
        }
    }
    else {
        try {
            yield (0, helpers_1.addNewPost)(description, User);
            res.status(200).json(successMessage);
        }
        catch ({ message }) {
            return res.status(500).json({ message });
        }
    }
});
exports.postAddNewPost = postAddNewPost;
