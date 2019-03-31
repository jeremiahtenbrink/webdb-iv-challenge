"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = require("../../data/dbConfig");
exports.getRecipes = () => {
    return dbConfig_1.database('recipes')
        .select('recipes.name', 'recipes.instructions', { dish_name: 'dishes.name' })
        .innerJoin('dishes', 'recipes.dish_id', 'dishes.id');
};
exports.getRecipe = (id) => {
    return dbConfig_1.database('recipes')
        .select('recipes.name', 'recipes.instructions')
        .where({ 'recipes.id': id }).first();
};
exports.addRecipe = (recipe) => {
    return dbConfig_1.database('recipes').insert(recipe);
};
exports.getRecipiesForDish = (dishID) => {
    return dbConfig_1.database('recipes')
        .where({ dish_id: dishID });
};
//# sourceMappingURL=recipies-model.js.map