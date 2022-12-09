"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const express_session_1 = __importDefault(require("express-session"));
const connect_mongodb_session_1 = __importDefault(require("connect-mongodb-session"));
const environment_1 = __importDefault(require("../../../environment"));
const user_1 = __importDefault(require("../../models/user"));
const response_messages_1 = __importDefault(require("../../controllers/shared/constants/response-messages"));
const MongoDBStore = (0, connect_mongodb_session_1.default)(express_session_1.default);
const sessionRouter = (0, express_1.Router)();
const store = new MongoDBStore({
    uri: environment_1.default.MONGODB_URI,
    collection: 'sessions',
});
sessionRouter.use((0, express_session_1.default)({
    secret: environment_1.default.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    store,
}));
sessionRouter.use((req, res, next) => {
    if (!req.session.user) {
        return next();
    }
    user_1.default.findById(req.session.user._id)
        .then((user) => {
        req.session.user = user;
        next();
    })
        .catch((err) => {
        const message = {
            message: response_messages_1.default.SOMETHING_WENT_WRONG_IN_SETTING_THE_SESSION,
        };
        res.status(500).json(message);
    });
});
exports.default = sessionRouter;
