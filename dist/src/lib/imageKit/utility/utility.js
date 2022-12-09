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
exports.storeImage = void 0;
const profile_responses_1 = require("../../../controllers/profile/constants/profile-responses");
const response_messages_1 = __importDefault(require("../../../controllers/shared/constants/response-messages"));
const imageKit_constants_1 = require("../constants/imageKit.constants");
const imageKit_1 = require("../imageKit");
function storeImage(base64EncodedImage, fileName, folder) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileType = base64EncodedImage.slice(base64EncodedImage.indexOf('/') + 1, base64EncodedImage.indexOf(';'));
        if (!imageKit_constants_1.SUPPORTED_IMAGES_FORMAT.includes(fileType))
            throw new Error(response_messages_1.default.DATA_FORMAT_NOT_SUPPORTED);
        try {
            const imageData = yield imageKit_1.imageKit.upload({
                file: base64EncodedImage,
                fileName: fileName,
                folder: folder
            });
            return imageData;
        }
        catch (_) {
            throw new Error(profile_responses_1.PROFILE_RESPONSE_MESSAGES.SAVING_THE_IMAGE_HAS_FAILED);
        }
    });
}
exports.storeImage = storeImage;
