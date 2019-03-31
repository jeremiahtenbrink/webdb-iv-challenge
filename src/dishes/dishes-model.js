"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dbConfig_1 = require("../../data/dbConfig");
exports.getDishes = () => {
    return dbConfig_1.database('dishes');
};
exports.getDish = (id) => {
    const recipies = dbConfig_1.database('recipes').where({ dish_id: id });
    return dbConfig_1.database('dishes')
        .where({ 'dishes.id': id }).first();
};
exports.addDish = (dish) => {
    return dbConfig_1.database('dishes').insert(dish);
};
//# sourceMappingURL=dishes-model.js.map