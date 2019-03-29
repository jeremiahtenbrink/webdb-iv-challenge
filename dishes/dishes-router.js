"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Dishes = __importStar(require("./dishes-model"));
const error = __importStar(require("../error/error"));
const Recipies = __importStar(require("../recipies/recipies-model"));
const dishesRouter = require('express').Router();
dishesRouter.get('/', async (req, res) => {
    try {
        const dishes = await Dishes.getDishes();
        if (dishes) {
            res.status(200).json(dishes);
            return;
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
dishesRouter.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            error.sendError(error.error(400, "Please include a id in your" +
                " request."), res);
        }
        let dish = await Dishes.getDish(id);
        const recipes = await Recipies.getRecipiesForDish(id);
        if (recipes) {
            dish.recipes = recipes;
        }
        if (dish) {
            res.status(200).json(dish);
            return;
        }
    }
    catch (e) {
        error.sendError(e, res);
    }
});
dishesRouter.post('/', async (req, res) => {
    try {
        if (!req.body.name) {
            error.sendError(error.error(400, 'Please include a dish name in' +
                ' your request.'), res);
            return;
        }
        const dish = req.body;
        const result = await Dishes.addDish(dish);
        if (result) {
            const newDish = await Dishes.getDish(result[0]);
            res.status(201).json(newDish);
        }
    }
    catch (e) {
        error.sendError(e, res);
    }
});
module.exports = dishesRouter;
//# sourceMappingURL=dishes-router.js.map