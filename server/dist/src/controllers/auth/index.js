"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postLogin = exports.postLogout = exports.postSignup = void 0;
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const auth_responses_1 = __importDefault(require("./constants/auth-responses"));
const user_1 = __importDefault(require("../../models/user"));
const auth_validators_1 = require("./validators/auth-validators");
const postLogout = (req, res, next) => {
    req.session.destroy(() => {
        const response = {
            message: auth_responses_1.default.UNAUTHENTICATED
        };
        res.status(401).json(response);
    });
};
exports.postLogout = postLogout;
const postLogin = (req, res) => {
    const { email, password } = req.body;
    const checkedCredentialsMessage = (0, auth_validators_1.checkLoginFields)({ email, password });
    if (checkedCredentialsMessage)
        return res.status(400).json({ message: checkedCredentialsMessage });
    user_1.default.findOne({ email }).then((user) => {
        if (!user) {
            const message = {
                message: auth_responses_1.default.WRONG_USERNAME_OR_PASSWORD
            };
            return res.status(400).json(message);
        }
        bcryptjs_1.default
            .compare(password, user.password)
            .then((doMatch) => {
            if (doMatch) {
                req.session.user = user;
                return req.session.save(() => {
                    const message = {
                        message: auth_responses_1.default.LOGGED_IN_SUCCESSFULLY
                    };
                    return res.status(200).json(message);
                });
            }
            const message = {
                message: auth_responses_1.default.WRONG_USERNAME_OR_PASSWORD
            };
            res.status(400).json(message);
        })
            .catch((err) => {
            const errorMessage = {
                message: auth_responses_1.default.SOMETHING_WENT_WRONG
            };
            res.status(500).json(errorMessage);
        });
    });
};
exports.postLogin = postLogin;
const postSignup = (req, res) => {
    const { fullName, email, password } = req.body;
    const checkedCredentialsMessage = (0, auth_validators_1.checkRegisterFields)({
        email,
        password,
        fullName
    });
    if (checkedCredentialsMessage)
        return res.status(400).json({ message: checkedCredentialsMessage });
    user_1.default.findOne({ email }).then((user) => {
        if (user) {
            const response = {
                message: auth_responses_1.default.USER_ALREADY_EXISTS
            };
            return res.status(403).json(response);
        }
        const errorMessage = {
            message: auth_responses_1.default.SOMETHING_WENT_WRONG
        };
        bcryptjs_1.default
            .hash(password, 12)
            .then((hashedPassword) => {
            const user = new user_1.default({
                fullName: fullName.trim(),
                email: email.trim(),
                password: hashedPassword
            });
            return user.save();
        })
            .then((createdUser) => {
            req.session.user = createdUser;
            return req.session.save((err) => {
                if (err)
                    return res.status(500).json(errorMessage);
                const message = {
                    message: auth_responses_1.default.USER_CREATED
                };
                res.status(201).json(message);
            });
        })
            .catch((_) => {
            res.status(500).json(errorMessage);
        });
    });
};
exports.postSignup = postSignup;
