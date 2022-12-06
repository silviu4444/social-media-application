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
const mongoose_1 = __importDefault(require("mongoose"));
const models_definition_1 = require("../shared/enums/models-definition");
const Schema = mongoose_1.default.Schema;
const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    posts: [
        {
            postId: {
                type: Schema.Types.ObjectId,
                ref: models_definition_1.ModelsDefinition.POST,
                required: true
            }
        }
    ]
}, { timestamps: true });
UserSchema.statics.getAllPosts = function (userId) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = yield this.findById(userId);
        const userWithPopulatedPosts = yield user.populate('posts.postId');
        return userWithPopulatedPosts.posts.map(post => post.postId);
    });
};
UserSchema.methods.addNewPost = function (post) {
    this.posts.push({ postId: post._id });
    return this.save();
};
const User = mongoose_1.default.model(models_definition_1.ModelsDefinition.USER, UserSchema);
exports.default = User;
