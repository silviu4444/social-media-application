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
exports.storeImageAndAddNewPost = exports.addNewPost = void 0;
const imageKit_constants_1 = require("../../../lib/imageKit/constants/imageKit.constants");
const utility_1 = require("../../../lib/imageKit/utility/utility");
const post_1 = __importDefault(require("../../../models/post"));
const post_responses_1 = __importDefault(require("../../post/constants/post.responses"));
function addNewPost(description, User, imageData = null) {
    return __awaiter(this, void 0, void 0, function* () {
        const post = new post_1.default({ description, userId: User, imageData });
        return post
            .save()
            .then((post) => User.addNewPost(post))
            .catch((error) => {
            throw new Error(post_responses_1.default.SOMETHING_WENT_WRONG);
        });
    });
}
exports.addNewPost = addNewPost;
function storeImageAndAddNewPost(base64Img, description, User) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { url, fileId: imageId } = yield (0, utility_1.storeImage)(base64Img, `POST_IMAGE_${new Date().toISOString()}`, imageKit_constants_1.ImageKitFolders.POSTS);
            const imageData = { imageUrl: url, imageId };
            return addNewPost(description, User, imageData);
        }
        catch ({ message }) {
            throw new Error(message);
        }
    });
}
exports.storeImageAndAddNewPost = storeImageAndAddNewPost;
