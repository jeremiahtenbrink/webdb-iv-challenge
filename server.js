"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const helmet_1 = __importDefault(require("helmet"));
const path = require('path');
const cors = require('cors');
const apiDocsPath = path.join(__dirname, './apidoc');
const Dishes = require('./src/dishes/dishes-router');
const Recipes = require('./src/recipies/recipies-router');
const server = express_1.default();
server.use(helmet_1.default());
server.use(cors());
server.use(express_1.default.json());
server.use('/dishes', Dishes);
server.use('/recipes', Recipes);
server.use('/', express_1.default.static(apiDocsPath));
exports.default = server;
//# sourceMappingURL=server.js.map