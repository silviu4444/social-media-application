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
const post_1 = __importDefault(require("../../models/post"));
const post_responses_1 = __importDefault(require("./constants/post.responses"));
const postAddNewPost = (req, res) => {
    const { description } = req.body;
    const User = req.session.user;
    const post = new post_1.default({ description, userId: User });
    post
        .save()
        .then((post) => {
        return User.addNewPost(post).then((_) => __awaiter(void 0, void 0, void 0, function* () {
            const message = {
                message: post_responses_1.default.POST_CREATED
            };
            res.status(200).json(message);
        }));
    })
        .catch((error) => {
        const message = {
            message: post_responses_1.default.SOMETHING_WENT_WRONG
        };
        res.status(500).json(message);
    });
};
exports.postAddNewPost = postAddNewPost;
