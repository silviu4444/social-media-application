"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const models_definition_1 = require("../shared/enums/models-definition");
const Schema = mongoose_1.default.Schema;
const PostSchema = new Schema({
    description: String,
    userId: {
        type: Schema.Types.ObjectId,
        ref: models_definition_1.ModelsDefinition.USER,
        required: true
    }
}, { timestamps: true });
const Post = mongoose_1.default.model(models_definition_1.ModelsDefinition.POST, PostSchema);
exports.default = Post;
