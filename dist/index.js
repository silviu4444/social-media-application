"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const mongoose_1 = __importDefault(require("mongoose"));
const body_parser_1 = __importDefault(require("body-parser"));
const express_1 = __importDefault(require("express"));
const environment_1 = __importDefault(require("./environment"));
const routes_1 = require("./src/routes");
const app = (0, express_1.default)();
app.use(body_parser_1.default.json({ limit: '7mb' }));
// should be removed on production!
app.use((_, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});
const clientDirectory = path_1.default.join(__dirname, '..', 'client', 'build');
console.log('clientDirectory', clientDirectory);
app.use(express_1.default.static(clientDirectory));
app.use(routes_1.routes);
routes_1.routes.get('*', (req, res) => {
    res.sendFile('index.html', { root: clientDirectory });
});
mongoose_1.default
    .connect(environment_1.default.MONGODB_URI)
    .then(() => {
    app.listen(environment_1.default.PORT, () => {
        console.log(`⚡️[server]: Server is running at https://localhost:${environment_1.default.PORT}`);
    });
})
    .catch(() => {
    console.log('connection failed');
});
