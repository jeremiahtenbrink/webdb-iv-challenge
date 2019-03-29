"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const Recipes = __importStar(require("./recipies-model"));
const Ingredients = __importStar(require("../ingredients/ingredients-modal"));
const Dishes = __importStar(require("../dishes/dishes-model"));
const recipesRouter = require('express').Router();
const error = (status, message) => {
    return {
        status,
        message
    };
};
const sendError = (error, res) => {
    res.status(error.status || 500).json({
        status: error.status || 500, message: error.message || "Server error"
    });
};
recipesRouter.get('/', async (req, res) => {
    try {
        const dishes = await Recipes.getRecipes();
        if (dishes) {
            res.status(200).json(dishes);
            return;
        }
    }
    catch (e) {
        res.status(500).json(e);
    }
});
recipesRouter.get('/:id', async (req, res) => {
    try {
        let id = req.params.id;
        if (!id) {
            sendError(error(400, "Please include a id in your request."), res);
        }
        const dish = await Recipes.getRecipe(id);
        const ingredients = await Ingredients.getIngredients(id);
        if (dish) {
            if (ingredients) {
                dish.ingredients = ingredients;
            }
            res.status(200).json(dish);
            return;
        }
    }
    catch (e) {
        sendError(e, res);
    }
});
recipesRouter.post('/', async (req, res) => {
    try {
        if (!req.body.name || !req.body.instructions || !req.body.dish_id) {
            sendError(error(400, "Please include in your body the name," +
                " instructions, and dish_id"), res);
            return;
        }
        const dish = await Dishes.getDish(req.body.dish_id);
        if (!dish) {
            sendError(error(400, "Please include a valid dish id"), res);
            return;
        }
        const recipe = req.body;
        if (recipe.ingredients) {
            recipe.ingredients = undefined;
        }
        const result = await Recipes.addRecipe(recipe);
        if (result) {
            const newRecipe = await Recipes.getRecipe(result[0]);
            if (newRecipe) {
                res.status(200).json(newRecipe);
            }
        }
    }
    catch (e) {
        sendError(e, res);
    }
});
module.exports = recipesRouter;
//# sourceMappingURL=recipies-router.js.map