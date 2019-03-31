"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = require("../../data/dbConfig");
exports.getIngredients = (recipeID) => {
    return dbConfig_1.database('ingredients')
        .select('ingredients.name', 'recipes_ingredients_bridge.amount')
        .innerJoin('recipes_ingredients_bridge', 'recipes_ingredients_bridge.ingredient_id', 'ingredients.id')
        .where({ 'recipes_ingredients_bridge.recipe_id': recipeID });
};
exports.addIngredients = (ingredients) => {
};
exports.addIngredient = (ingredient) => {
};
//# sourceMappingURL=ingredients-modal.js.map