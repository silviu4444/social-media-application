"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkLoginFields = exports.checkRegisterFields = exports.maxLengthName = exports.minLengthName = exports.maxLengthPassword = exports.minLengthPassword = exports.emailValidityPattern = void 0;
const auth_responses_1 = __importDefault(require("../constants/auth-responses"));
exports.emailValidityPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
exports.minLengthPassword = 8;
exports.maxLengthPassword = 30;
exports.minLengthName = 3;
exports.maxLengthName = 20;
const checkRegisterFields = ({ email, fullName, password, }) => {
    const fullNameLength = fullName.length;
    const passwordLength = password.length;
    const hasAtLeastOneInvalidField = !email ||
        !fullName ||
        !fullName.trim() ||
        !password ||
        !exports.emailValidityPattern.test(email) ||
        fullNameLength < exports.minLengthName ||
        fullNameLength > exports.maxLengthName ||
        passwordLength < exports.minLengthPassword ||
        passwordLength > exports.maxLengthPassword;
    if (hasAtLeastOneInvalidField) {
        return auth_responses_1.default.PLEASE_PROVIDE_VALID_CREDENTIALS;
    }
    return null;
};
exports.checkRegisterFields = checkRegisterFields;
const checkLoginFields = ({ email, password }) => {
    const passwordLength = password.length;
    const hasAtLeastOneInvalidField = !email ||
        !password ||
        !exports.emailValidityPattern.test(email) ||
        passwordLength < exports.minLengthPassword ||
        passwordLength > exports.maxLengthPassword;
    if (hasAtLeastOneInvalidField) {
        return auth_responses_1.default.PLEASE_PROVIDE_VALID_CREDENTIALS;
    }
    return null;
};
exports.checkLoginFields = checkLoginFields;
